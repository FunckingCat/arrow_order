import React,{Component} from 'react';
import './CakeOrderDetails.scss'; 
import {connect} from 'react-redux';
import {setDetail} from '../../../actions/orderActions';

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
        this.props.setDetail('date', this.state.date);
        if (this.state.comment){
            this.props.setDetail('comment', this.state.comment);
        }        
    }

    render(){
        return(
            <div className="cakeOrderDetails">
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
                    active = {this.state.date? 'true' : 'false'}
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
    setDetail
} 

export default connect(mapStateToProps, mapDispatchToProps)(CakeOrderDetails)
