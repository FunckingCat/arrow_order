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
import Details        from '../../../ComCom/InfoView/Details/Details';
import List           from '../../../ComCom/InfoView/List/List';

import Biscuit   from '../../../ComCom/Icons/Biscuit';
import Bowl      from '../../../ComCom/Icons/Bowl';
import PastryBag from '../../../ComCom/Icons/PastryBag';

class IngredientsMaster extends Component {

    RequestService = new requestService(this.props.domen)

    state = {
        active : [],
        prevParts : {},
        description : '',
    }

    componentDidMount() {
        this.updateItems();
    }

    componentDidUpdate() {
        if (this.shouldUpdate()){
            this.updateItems();
        }        
    }

    shouldUpdate = () => {
        let {filling, biscuit,cream} = this.props.parts;
        let prev = this.state.prevParts;
        //if (biscuit !== prev.biscuit || cream !== prev.cream || filling !== prev.filling) return true
        switch (this.props.content){
            case 'Начинка':
                if (biscuit !== prev.biscuit || cream !== prev.cream) return true
                break
            case 'Бисквит':
                if (filling !== prev.filling || cream !== prev.cream) return true
                break
            case 'Крем':
                if (filling !== prev.filling || biscuit !== prev.biscuit) return true
                break
            default:
                break
        }
        return false
    }

    updateItems = () => {
        this.RequestService.getCakeInfo(this.props.type, this.props.content, this.props.parts)
        .then((res) => {
            //let description = 'Похоже вы выбрали несочетаемые ингредиенты, попробуйте начать с начинки, тогда вы точно сможете собратьт самый вкусный торт!';
            this.setState({
                active : res,
                prevParts : this.props.parts,
                //description : res.length === 0? description : '',
            })                           
        })
    }

    partSubmit = (event) => {

        let selected = event.target.dataset.value;

        console.log(selected);
        
        let {
            items,
            content,
            setAssemblyParts,
            setBiscuitColor,
            setFillingColor,
            setCreamColor
        } = this.props;

        let color = items
            .filter(item => item.name === selected)
            .map(item => [item.fillColor, item.strokeColor])[0]
        switch (content){
            case 'Начинка':
                setAssemblyParts('filling', selected)
                setFillingColor(color[0], color[1]);
                break
            case 'Бисквит':
                setAssemblyParts('biscuit', selected)
                setBiscuitColor(color[0], color[1]);
                break
            case 'Крем':
                setAssemblyParts('cream', selected)
                setCreamColor(color[0], color[1]);
                break
            default:
                break
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

    makeItems = () => {
        let res = [];
        for (let i=0; i < this.props.items.length; i++){
            let el = this.props.items[i];
            let ic;
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
                        radioChecked = {this.partSubmit}/>
                <Details
                    summary = {summary}
                    height = {'8em'}>
                        {this.state.description}
                </Details>
            </div>
        )
    }
} 

const mapStateToProps = (state) => {
    return({
        domen : state.domen,
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
