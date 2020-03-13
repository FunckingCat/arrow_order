import React,{Component} from 'react';
import './OrderPush.scss'; 
import {connect} from 'react-redux'; 

import RequestService from '../../servises/requestService';

import Animator from '../ComCom/Animator/Animator';
import Spinner from '../ComCom/Spiner/Spiner';
import TransLink from '../ComCom/Buttons/TransLink/TransLink';
import BlackButton from '../ComCom/Buttons/BlackButton/BlackButton';
import ErrorIcon from '../ComCom/Icons/Error'

class OrderPush extends Component {

    RS = new RequestService(this.props.domen)

    state = {
        status : 'Going',
    }

    
    componentDidMount () {
        this.pushOrder()
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
   
    renderContent = (status) => {

        let anim = com => <Animator>{com}</Animator>

        let loading = 
            <div className="loading">
                <div className="massage first">Отправляю ваш заказ на сервер</div>
                <div className="massage second">Ждем ответ</div>
                <Spinner/>
            </div>
        let ok = 
            <div className="ok">
                <div className="massage first">Заказ принят</div>
                <div className="massage second">Катя скоро с вами свяжется</div>
                <Spinner/>
                <TransLink
                    text = 'На главную'
                    mode = 'border'
                    active = {'true'}
                    transferTo = 'Главная'
                    to = '/MainPage'/>
            </div>
        let disconnect =
            <div className="disconnect">
                <div className="massage first">Упс</div>
                <div className="massage second">Проблемы с подключением</div>
                <ErrorIcon/>
                <BlackButton
                    mode = 'border'
                    active = 'true'
                    onClick = {this.pushOrder}
                    text = 'Попробавть еще раз'/>
            </div>
        let reject = 
            <div className="reject">
                <div className="massage first">Заказ отклонен</div>
                <div className="massage second">Почему? Никто не знает</div>
                <div className="massage second">Возможно не заполнены контакные данные</div>
                <BlackButton
                    mode = 'border'
                    active = 'true'
                    onClick = {this.pushOrder}
                    text = 'Попробавть еще раз'/>
                <TransLink
                    text = 'На главную'
                    mode = 'border'
                    active = {'true'}
                    transferTo = 'Главная'
                    to = '/MainPage'/>
            </div>
        if (status === 'Going') return anim(loading)
        else if (status === 'Ok') return anim(ok)
        else if (status === 'Disconnect') return anim(disconnect)
        else if (status === 'Reject') return anim(reject)
        else console.error('Неизвестный ответ сервера: OrderPush renderContent');
    }

    render(){

        let content = this.renderContent(this.state.status);

        return(
                <div className="orderPush">
                    {content}
                </div>
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
