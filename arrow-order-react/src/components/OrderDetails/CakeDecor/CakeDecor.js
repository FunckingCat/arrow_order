import React,{Component} from 'react';
import './CakeDecor.scss'; 
import {connect} from 'react-redux'; 

import RequestService from '../../../servises/requestService';

import CheckList from '../../ComCom/InfoView/CheckList/CheckList';
import ColorPicker from '../../ComCom/SevColorPicker/SevColorPicker';
import TransLink from '../../ComCom/Buttons/TransLink/TransLink';

class CakeDecor extends Component {

    RS = new RequestService(this.props.domen)

    componentDidMount () {
        this.loadInfo();
    }

    loadInfo = () => {
        console.log(this.props.domen, this.props.type);
        this.RS.getDetails(this.props.type)
    }

    render(){
        return(
            <div className="cakeDecor">
                <CheckList
                    title = 'Выберите декор:'/>
                <ColorPicker/>
                <TransLink
                        mode = 'border'
                        text='Далее'
                        transferTo = 'Детали заказа'
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
