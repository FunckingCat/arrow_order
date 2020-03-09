import React,{Component} from 'react';
import './OrderOutput.scss'; 
import {connect} from 'react-redux'; 

import Animator from '../ComCom/Animator/Animator';
import TransLink from '../ComCom/Buttons/TransLink/TransLink';

class OrderOutput extends Component {

    renderParts = (order) => {
        if (!order.parts || order.parts.biscuit === '') return false
        return(
            <>
                <div className="biscuit">Бисквит: {order.parts.biscuit}</div>
                <div className="filling">Начинка: {order.parts.filling}</div>
                <div className="cream">Крем: {order.parts.cream}</div>
            </>
        )
    }

    renderOptionalDetails = (order) => {
        let res = [];
        let notDisplay = ['type', 'date', 'comment', 'parts']
        for (let key in order){
            if (notDisplay.indexOf(key) < 0){
                res.push(
                    <div className="detail" key = {key}>
                        <span className="key">
                            {key} : 
                        </span>
                        <span className="value">
                            {order[key]}
                        </span>
                    </div>
                )
            }
        }
        return res
    }

    render(){
        let order = this.props.order;
        let parts = this.renderParts(order);
        let optionalDetails = this.renderOptionalDetails(order);
        return(
            <Animator>
                <div className="orderOutput">
                    <div className="logo">
                        <img src={this.props.domen + '/static/logo.svg'} alt=""/>
                    </div>
                    <div className="name">Имя: {this.props.name}</div>
                    <div className="contact">
                        {this.props.contact[0]==='@'? 'Insta : ':'Телефон : '}
                        {this.props.contact}
                    </div>                
                    <div className="title">{order.type}</div>
                    {parts}
                    {optionalDetails}
                    <div className="comment">{order.comment}</div>
                    <div className="dateOut">
                        <span className="text">Дата заказа:</span>
                        <span className="date">{order.date}</span>
                    </div>
                    <TransLink
                        text = 'Подвтвердить'
                        mode = 'border'
                        active = {'true'}
                        transferTo = 'Подтверждение'
                        to = '/MainPage'/>
                </div>
            </Animator>
        )
    }
} 

 const mapStateToProps = (state) => {
 return({
    domen : state.domen,
    order : state.orderDetails,
    name  : state.login.name,
    contact : state.login.contact,
 })
} 

const mapDispatchToProps = {

} 

export default connect(mapStateToProps, mapDispatchToProps)(OrderOutput)
