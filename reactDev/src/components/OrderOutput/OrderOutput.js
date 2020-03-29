import React,{Component} from 'react';
import './OrderOutput.scss'; 
import {connect} from 'react-redux'; 

import Animator from '../ComCom/Animator/Animator';
import TransLink from '../ComCom/Buttons/TransLink/TransLink';
import AssemblyView from '../Constructor/ConstructorComponents/UniversalConstructor/AssemblyView/AssemblyView';

class OrderOutput extends Component {

    renderLogo = (type) => {
        //console.log(type);
        let specialTypes = ['Бисквитный торт', 'Открытый медовик', 'Капкейки', 'Торт - цифра']
        if (specialTypes.includes(type)){
            return <AssemblyView/>
        } else {
            return <img src={this.props.domen + '/static/logo.svg'} alt=""/>
        }
    }

    renderParts = (order) => {
        if (order.parts.biscuit === '' ||
            order.parts.biscuit === undefined) return false
        return(
            <>  
                <div className="detail">
                    <span className="key">
                        Бисквит:
                    </span>
                    <span className="value">
                        {order.parts.biscuit}
                    </span>
                </div>
                <div className="detail">
                    <span className="key">
                        Начинка:
                    </span>
                    <span className="value">
                        {order.parts.filling}
                    </span>
                </div>
                <div className="detail">
                    <span className="key">
                        Крем:
                    </span>
                    <span className="value">
                        {order.parts.cream}
                    </span>
                </div>
            </>
        )
    }

    renderOptionalDetails = (order) => {
        let res = [];
        let notDisplay = ['type', 'date', 'comment', 'parts', 'cost']
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
        let logo = this.renderLogo(this.props.order.type)
        let order = this.props.order;
        let parts = this.renderParts(order);
        let optionalDetails = this.renderOptionalDetails(order);
        return(
            <Animator>
                <div className="orderOutput">
                    <div className="logo">
                        {logo}
                    </div>
                    <div className="name">Имя: {this.props.name}</div>
                    <div className="contact">
                        {this.props.contact[0]==='@'? 'Insta : ':'Телефон : '}
                        {this.props.contact}
                    </div>                
                    <div className="title">{order.type}</div>
                    <div className="details">
                        {parts}
                        {optionalDetails}
                    </div>
                    <div className="comment">{order.comment}</div>
                    <div className="dateOut">
                        <span className="text">Дата заказа:</span>
                        <span className="date">{order.date}</span>
                    </div>
                    <TransLink
                        text = 'Подвтвердить'
                        mode = 'border'
                        active = {'true'}
                        transferTo = 'Завершение'
                        to = '/OrderPush'/>
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
