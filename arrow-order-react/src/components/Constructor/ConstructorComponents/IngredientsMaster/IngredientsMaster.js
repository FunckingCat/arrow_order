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
//import Details        from '../../../ComCom/InfoView/Details/Details';
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
        let {filling,biscuit,cream} = this.props.parts;
        if (!Boolean(filling||biscuit||cream)){
            document.querySelectorAll('.radioButton').forEach(item => {
                item.checked = false;
            })
        }
        if (this.shouldUpdate()){
            this.updateItems();
        }        
    }

    shouldUpdate = () => {
        let {filling, biscuit,cream} = this.props.parts;
        let prev = this.state.prevParts;
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
            this.setState({
                active : res,
                prevParts : this.props.parts,
            })                           
        })
    }

    onSelect = (value) => {
        let item;
        let {items, setAssemblyParts, setBiscuitColor,
            setFillingColor, setCreamColor, content} = this.props;
        if (content === 'Начинка'){
            setAssemblyParts('filling', value);
            item = items.filter(item => item.name === value)[0];
            setFillingColor(item.fillColor, item.strokeColor);
        } else if (content === 'Бисквит'){
            setAssemblyParts('biscuit', value);
            item = items.filter(item => item.name === value)[0];
            setBiscuitColor(item.fillColor, item.strokeColor);
        } else if (content === 'Крем'){
            setAssemblyParts('cream', value);
            item = items.filter(item => item.name === value)[0];
            setCreamColor(item.fillColor, item.strokeColor);
        }
    }

    //Рендерим иконки по заданным цветам
    renderItems = (items) => {
        let res = [];
        let icon; //Определяем тип иконки исзодя из контента
        if (this.props.content === 'Начинка') icon = (id, fill, stroke) => <Bowl id = {id} color = {fill} stroke = {stroke}/>
        if (this.props.content === 'Бисквит') icon = (id, fill, stroke) => <Biscuit id = {id} color = {fill} stroke = {stroke}/>
        if (this.props.content === 'Крем')    icon = (id, fill, stroke) => <PastryBag id = {id} color = {fill} stroke = {stroke}/>
        for (let item of items){
            res.push({
                id   : item.id,
                name : item.name,
                icon : icon(item.id, item.fillColor, item.strokeColor),
            })
        }
        return res
    }

    render(){

        return(
            <div className="IngredientsMaster">
                <List
                    title = {this.props.content} 
                    items = {this.renderItems(this.props.items)}
                    active = {this.state.active}
                    onSelect = {this.onSelect}/>
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
