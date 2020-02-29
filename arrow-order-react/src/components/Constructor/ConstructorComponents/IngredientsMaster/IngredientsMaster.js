import React,{Component} from 'react';
import './IngredientsMaster.scss'; 
import {connect} from 'react-redux'; 

import {setAssemblyParts} from '../../../../actions/orderActions';
import {
    setBiscuitColor,
    setFillingColor,
    setCreamColor
} from '../../../../actions/assemblyColorsActions';

import requestService from '../../../../servises/requestService';
import BlackButton    from '../../../ComCom/Buttons/BlackButton/BlackButton';
import Details        from '../../../ComCom/InfoView/Details/Details';
import List           from '../../../ComCom/InfoView/List/List';

import Biscuit from '../../../ComCom/Icons/Biscuit';
import Bowl from '../../../ComCom/Icons/Bowl';
import PastryBag from '../../../ComCom/Icons/PastryBag';

class IngredientsMaster extends Component {

    RequestService = new requestService(this.props.domen)

    state = {
        items : [],
        active : [],
        selected : '',
        buttonActive : 'false',
        constant : 0,
        prevContent : null,
        description : '',
    }

    componentDidMount() {
        this.updateItems();
        this.getDescription();
    }

    componentDidUpdate() {
        this.updateItems();
        this.getDescription();
    }

    updateItems = () => {
        if (this.props.content !== this.state.prevContent){
            this.RequestService.getCakeInfo(this.props.type, this.props.content, this.props.parts)
            .then((res) => {
                let active = []
                try{active = res.active.map(item => item.name)} // При сбросе вылетает исключение, ловим его
                catch(e){}
                let description = 'Похоже вы выбрали несочетаемые ингредиенты, попробуйте начать с начинки, тогда вы точно сможете собратьт самый вкусный торт!';
                console.log(active);
                this.setState({
                    items : res.all || [], // Так же ловим исключение про сбросе
                    active : active,
                    selected : '',
                    buttonActive : 'false',
                    prevContent : this.props.content,
                    description : active.length === 0? description : '',
                })                           
            })
        } 
    }

    radioChecked = (event) => {
        this.setState({
            selected : event.target.dataset.value,
            buttonActive : 'true',
        })
    }

    partSubmit = () => {
        let {
            content,
            setAssemblyParts,
            setBiscuitColor,
            setFillingColor,
            setCreamColor
        } = this.props;

        let {
            items,
            buttonActive,
            selected
        } = this.state;


        if (buttonActive === 'true'){
            let parts = {
                filling : undefined,
                biscuit : undefined,
                cream   : undefined
            }
            let color = items
                .filter(item => item.name === selected)
                .map(item => [item.fillColor, item.strokeColor])[0]
            switch (content){
                case 'Начинка':
                    parts = {...parts, filling : selected};
                    setFillingColor(color[0], color[1]);
                    break
                case 'Бисквит':
                    parts = {...parts, biscuit : selected}
                    setBiscuitColor(color[0], color[1]);
                    break
                case 'Крем':
                    parts = {...parts, cream : selected}
                    setCreamColor(color[0], color[1]);
                    break
                default:
                    break
            }
            setAssemblyParts(parts)
            let now = new Date();
            this.setState({
                buttonActive : 'false',
                selected : '',
                constant : now.getMilliseconds(),
            })
        }            
    }

    defSummary = () => {
        let summary = '';
        if (this.state.selected){
            summary = this.state.selected + ' ' + this.props.content.toLowerCase();
        }
        if (this.state.active.length === 0) {
            summary = 'Нет подходящих вариантов, измените состав';            
        }
        return summary
    }

    getDescription = async () => {
        if (this.state.selected){
            let hashtag = this.state.items
            .filter(item => item.name === this.state.selected)
            .map(item => item.hashtag)[0];
            this.RequestService.getWikiCard(hashtag)
            .then(res => {
                if (this.state.description !== res.text){
                    this.setState({
                        description : res.text,
                    })
                }                
            })
            .catch(res => {
                this.setState({
                    description : 'К сожалению к этому еще нет описания',
                })
            });
        }        
    }

    calcMaxHeight = () => {
        let windowHeight = document.documentElement.clientHeight;
        let popUpRatio = 0.9;
        let radioItemHeight = 30;
        let listTitleHeight = 32 + 19.2;
        let listHeight = listTitleHeight + radioItemHeight * this.state.items.length + 40;
        let addHeight = 100;
        let avalibleHeight = popUpRatio * windowHeight - listHeight - addHeight;
        if (avalibleHeight < 0) {avalibleHeight = 0}
        return Math.floor(avalibleHeight)
    }

    makeItems = () => {
        let res = [];
        for (let i=0; i < this.state.items.length; i++){
            let el = this.state.items[i];
            let ic
            switch (this.props.content){
                case 'Начинка':
                    ic = <Bowl id = {i} color = {el.fillColor} stroke = {el.strokeColor}/>
                    break
                case 'Бисквит':
                    ic = <Biscuit id = {i} color = {el.fillColor} stroke = {el.strokeColor}/>
                    break
                case 'Крем':
                    ic = <PastryBag id = {i} color = {el.fillColor} stroke = {el.strokeColor}/>
                    break
                default:
                    break
            }
            let item = {
                name : el.name,
                icon : ic,
            }
            res.push(item)
        }
        return res
    }

    render(){
        let summary = this.defSummary();
        let items = this.makeItems();
        return(
            <div className="ingredientsMaster">
                <List 
                        title = {this.props.content}
                        items = {items}
                        activeItems = {this.state.active}
                        radioChecked = {this.radioChecked}
                        constant = {this.state.constant}/>
                <div className="add">
                    <Details
                        summary = {summary}
                        height = {this.calcMaxHeight() + 'px'}>
                            {this.state.description}
                    </Details>
                    <BlackButton 
                        text = 'Добавить' 
                        active={this.state.buttonActive}
                        onClick = {this.partSubmit}/>
                </div>
            </div>
        )
    }
} 

const mapStateToProps = (state) => {
    return({
        domen : state.domen,
        content : state.popUp.content,
        type   : state.orderDetails.type,
        parts : {
            biscuit : state.orderDetails.parts.biscuit, 
            filling : state.orderDetails.parts.filling,
            cream   : state.orderDetails.parts.cream
        }
    })
} 

const mapDispatchToProps = {
    setAssemblyParts, 
    setBiscuitColor,
    setFillingColor,
    setCreamColor
} 

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsMaster)
