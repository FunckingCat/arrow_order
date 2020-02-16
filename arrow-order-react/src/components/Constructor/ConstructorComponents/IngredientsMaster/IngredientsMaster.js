import React,{Component} from 'react';
import './IngredientsMaster.scss'; 
import {connect} from 'react-redux'; 

import {setSelected, setConstant} from '../../../../actions/ingredietsMasterActions';
import {setCakeParts} from '../../../../actions/cakeConstructorActions';

import requestService from '../../../../servises/requestService';
import BlackButton    from '../../../ComCom/Buttons/BlackButton/BlackButton';
import Details        from '../../../ComCom/InfoView/Details/Details';
import List           from '../../../ComCom/InfoView/List/List';

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
                catch{}
                let description = 'Похоже вы выбрали несочетаемые ингредиенты, попробуйте начать с начинки, тогда вы точно сможете собратьт самый вкусный торт!';
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
        if (this.state.buttonActive === 'true'){
            this.props.setCakeParts({
                filling : this.props.content === 'Начинка'? this.state.selected : '',
                biscuit : this.props.content === 'Бисквит'? this.state.selected : '',
                cream   : this.props.content === 'Крем'? this.state.selected : '',
            })
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

    render(){
        let summary = this.defSummary();
        return(
            <div className="ingredientsMaster">
                <List 
                        title = {this.props.content}
                        items = {this.state.items}
                        activeItems = {this.state.active}
                        domen = {this.props.domen}
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
        content : state.ingredientsMaster.content,
        selected : state.ingredientsMaster.selected,
        constant : state.ingredientsMaster.constant,
        parts : {
            filling : state.cakeParts.filling,
            biscuit : state.cakeParts.biscuit,
            cream : state.cakeParts.cream,
        }
    })
} 

const mapDispatchToProps = {
    setSelected : setSelected,
    setConstant : setConstant,
    setCakeParts : setCakeParts, 
} 

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsMaster)
