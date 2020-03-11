import React,{Component} from 'react';
import './OrderPush.scss'; 
import {connect} from 'react-redux'; 

import RequestService from '../../servises/requestService';

import Spinner from '../ComCom/Spiner/Spiner';

class OrderPush extends Component {

    RS = new RequestService(this.props.domen)

    state = {
        requestStatus : 'In Process',
    }

    renderContent = (status) => {
        return false && <Spinner/>
    }

    componentDidMount () {
        let orderJSON = this.buildOrderJson(
            this.props.order,
            this.props.name,
            this.props.contact);
        this.RS.postOrder(orderJSON)
    }

    buildOrderJson = (order, name, contact) => {
        let lockedKeys = ['type', 'parts', 'cost', 'date', 'comment']
        let details = '';
        let parts = '';
        if (order.parts && Object.keys(order.parts).length !== 0){
            parts = `Начинка: ${order.parts.filling},\n Бисквит: ${order.parts.biscuit},\n Крем: ${order.parts.cream}`
        }
        for (let key in order){
            if (lockedKeys.indexOf(key) < 0) details += `${key}: ${order[key]},\n`
        }
        let orderObj =  {
            name    : name,
            contact : contact,
            type    : order.type,
            date    : order.date,
            details : details,
            comment : order.comment || '',
        }
        if (parts.length > 0) orderObj.parts = parts
        return JSON.stringify(orderObj)
    }

    render(){

        let content = this.renderContent(this.state.status);

        return(
                <div className="orderPush">
                    <div className="content">
                        {content}
                    </div>
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
