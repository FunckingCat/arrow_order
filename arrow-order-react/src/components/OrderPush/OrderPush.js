import React,{Component} from 'react';
import './OrderPush.scss'; 
import {connect} from 'react-redux'; 

import RequestService from '../../servises/requestService';

import Animator from '../ComCom/Animator/Animator';
import Spiner from '../ComCom/Spiner/Spiner';
import TransLink from '../ComCom/Buttons/TransLink/TransLink';
import BlackButton from '../ComCom/Buttons/BlackButton/BlackButton';
import ErrorIcon from '../ComCom/Icons/Error'

class OrderPush extends Component {

    RS = new RequestService(this.props.domen)

    state = {
        status : 'Disconnect',
        prevStatus : null,
    }

    
    componentDidMount () {
        //this.pushOrder()
        this.setContent('Going')
    }

    componentDidUpdate() {
        if (this.state.status !== this.state.prevStatus){
            this.setContent(this.state.status)
        }
    }

    pushOrder = () => {
        this.setState({
            status : 'Going'
        })
        let orderJSON = this.buildOrderJson(
            this.props.order,
            this.props.name,
            this.props.contact);
        this.RS.postOrder(orderJSON)
        .then(res => this.updateStatus(res.status))
    }

    updateStatus = (status) => {
        this.setState({
            status : status,
        })
    } 
        
    buildOrderJson = (order, name, contact) => {
        let lockedKeys = ['type', 'parts', 'cost', 'date', 'comment']
        let details = '';
        let parts = '';
        if (order.parts && Object.keys(order.parts).length !== 0){
            parts = `Начинка: ${order.parts.filling}; Бисквит: ${order.parts.biscuit}; Крем: ${order.parts.cream}`
        }
        for (let key in order){
            if (lockedKeys.indexOf(key) < 0) details += `${key}: ${order[key]};`
        }
        let orderObj =  {
            name    : name,
            contact : contact,
            type    : order.type,
            date    : order.date,
            details : details,
        }
        if (parts.length > 0) orderObj.parts = parts
        if (order.comment && order.comment.length > 0) orderObj.comment = order.comment
        console.log(orderObj);
        return JSON.stringify(orderObj)
    }

    setContent(status){
        if (status === 'Going'){
            this.setState({
                prevStatus    : status,
                firstMassage  : 'Отправляю ваш заказ на сервер',
                secondMassage : 'Ждем ответ',
                thirdMassage  : '',
                icon          : <Spiner spin = 'true'/>,
                firstButton   : '',
                secondButton  : '',
            })
        }
        else if (status === 'Ok'){
            this.setState({
                prevStatus    : status,
                firstMassage  : 'Заказ принят',
                secondMassage : 'Катя скоро с вами свяжется',
                thirdMassage  : '',
                icon          : <Spiner/>,
                firstButton   : <TransLink
                                    text = 'На главную'
                                    mode = 'border'
                                    active = {'true'}
                                    transferTo = 'Главная'
                                    to = '/MainPage'/>,
                secondButton  : '',
            })
        }
        else if (status === 'Disconnect'){
            this.setState({
                prevStatus    : status,
                firstMassage  : 'Упс',
                secondMassage : 'Проблемы с подключением',
                thirdMassage  : '',
                icon          : <ErrorIcon/>,
                firstButton   : <BlackButton
                                    mode = 'border'
                                    active = 'true'
                                    onClick = {this.pushOrder}
                                    text = 'Попробавть еще раз'/>,
                secondButton  : '',
            })
        }
        else if (status === 'Reject'){
            this.setState({
                prevStatus    : status,
                firstMassage  : 'Заказ отклонен',
                secondMassage : 'Почему? Никто не знает',
                thirdMassage  : 'Возможно не заполнены контакные данные',
                icon          : <ErrorIcon/>,
                firstButton   : <BlackButton
                                    mode = 'border'
                                    active = 'true'
                                    onClick = {this.pushOrder}
                                    text = 'Попробавть еще раз'/>,
                secondButton  : <TransLink
                                    text = 'На главную'
                                    mode = 'border'
                                    active = {'true'}
                                    transferTo = 'Главная'
                                    to = '/MainPage'/>,
            })
        }
        else console.error('Неизвестный ответ сервера: OrderPush ', status);
    }

    render(){
        let {firstMassage, secondMassage, thirdMassage,
            icon, firstButton, secondButton} = this.state;
        return(
            <Animator>
                <div className="orderPush">
                    <div className="massage first">{firstMassage}</div>
                    <div className="massage second">{secondMassage}</div>
                    <div className="massage second">{thirdMassage}</div>
                    {icon}
                    {firstButton}
                    {secondButton}
                </div>
            </Animator>
            )
        }
    } 

 const mapStateToProps = (state) => {
    return({
        name    : state.login.name,
        contact : state.login.contact,
        domen   : state.domen,
        order   : state.orderDetails,
    })
} 

export default connect(mapStateToProps)(OrderPush)
