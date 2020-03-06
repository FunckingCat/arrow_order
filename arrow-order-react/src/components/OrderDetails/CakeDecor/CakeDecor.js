import React,{Component} from 'react';
import './CakeDecor.scss'; 
import {connect} from 'react-redux'; 

import RequestService from '../../../servises/requestService';

import InputRange  from '../../ComCom/Buttons/InputRange/InputRange';
import CheckList   from '../../ComCom/InfoView/CheckList/CheckList';
import ColorPicker from '../../ComCom/SevColorPicker/SevColorPicker';
import TransLink   from '../../ComCom/Buttons/TransLink/TransLink';

class CakeDecor extends Component {

    RS = new RequestService(this.props.domen)

    state = {
        range : {
            min : 0,
            max : 4,
            step: 0.01,
            dimension: 'кг'
        },
        decor  : [],
        colors : [],
    }

    componentDidMount () {
        this.loadInfo();
    }

    loadInfo = () => {
        let addDomen = (item, domen) => {
            return {
                name : item.name,
                icon : domen + item.icon,
                decr : item.decr,
            }
        }
        this.RS.getDetails(this.props.type)
        .then((res) => {
            console.log(res);
            let {colors, weight, decor} = res;
            this.setState({
                range : {
                    min : weight.min,
                    max : weight.max,
                    step: weight.step,
                    dimension: weight.dim,
                },
                colors : colors,
                decor : decor.map(item => addDomen(item, this.props.domen)),
            })
        })
    }

    onWeightInput = (value) => {
        console.log(value);
    }

    onDecorInput = (value) => {
        console.log(value);
    }

    onColorInput = (value) => {
        console.log(value);
    }

    render(){

        let title = this.props.type !== 'Капкейки'? 'Вес торта:' : 'Колличество капкейков:'

        return(
            <div className="cakeDecor">
                <div className="weight">
                    <div className="title">{title}</div>
                    <InputRange 
                        min = {this.state.range.min}
                        max = {this.state.range.max}
                        step = {this.state.range.step}
                        dimension = {this.state.range.dimension}
                        onInput = {this.onWeightInput}/>
                </div>
                <CheckList
                    title = 'Декор:'
                    items = {this.state.decor}
                    onChange = {this.onDecorInput}/>
                <ColorPicker
                    onChange = {this.onColorInput}/>
                <TransLink
                        mode = 'border'
                        text='Далее'
                        transferTo = 'Дата'
                        to = '/Details/Cake/'
                        onClick={this.confirm}
                        active = {'true'}/>
            </div>
        )
    }
} 

 const mapStateToProps = (state) => {
    return({
        domen : state.domen,
        type  : state.orderDetails.type,
    })
} 

const mapDispatchToProps = {

} 

export default connect(mapStateToProps, mapDispatchToProps)(CakeDecor)
