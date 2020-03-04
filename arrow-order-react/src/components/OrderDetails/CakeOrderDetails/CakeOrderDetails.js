import React,{Component} from 'react';
import './CakeOrderDetails.scss'; 
import {connect} from 'react-redux';

import InputRange  from '../../ComCom/Buttons/InputRange/InputRange';
import DatePicker  from '../../ComCom/DatePicker/DatePicker';
import InputText   from '../../ComCom/InputText/InputText';
import TransLink from '../../ComCom/Buttons/TransLink/TransLink';

class CakeOrderDetails extends Component {

    state = {
        range : {
            min : 0.5,
            max : 4,
            step: 0.01,
            dimension: 'кг'
        }
    }

    onWeightInput = (weight) => {
        this.setState({
            weight : weight
        })
    }

    onDateInput = (date) => {
        this.setState({
            date : date
        })
    }

    onCommentInput = (comment) => {
        this.setState({
            comment : comment
        })
    }

    confirm = () => {
        console.log(
            this.state.weight,
            this.state.date,
            this.state.comment
        );
    }

    render(){
        return(
            <div className="cakeOrderDetails">
                <div className="title">Выберте вес торта:</div>
                <InputRange 
                    min = {this.state.range.min}
                    max = {this.state.range.max}
                    step = {this.state.range.step}
                    dimension = {this.state.range.dimension}
                    onInput = {this.onWeightInput}/>
                <div className="title">Выберте дату заказа:</div>
                <DatePicker
                    onInput = {this.onDateInput}/>
                <div className="title">Комментарий к заказу:</div>
                <InputText
                    placeholder = 'Напишите здесь все что вам хотелось бы видеть в торте, оставтьте информацию о ваших прдпочтениях, аллергиях и т.д.'
                    onInput = {this.onCommentInput}/>
                <TransLink
                    text = 'Далее'
                    mode = 'border'
                    active = {this.state.weight && this.state.date? 'true' : 'false'}
                    transferTo = 'Никуда'
                    to = '#'
                    onClick = {this.confirm}/>
            </div>
        )
    }
} 

 const mapStateToProps = (state) => {
    return({
        type : state.orderDetails.type
    })
} 

const mapDispatchToProps = {

} 

export default connect(mapStateToProps, mapDispatchToProps)(CakeOrderDetails)
