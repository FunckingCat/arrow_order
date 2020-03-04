import React,{Component} from 'react';
import './CakeOrderDetails.scss'; 
import {connect} from 'react-redux';

import InputRange from '../../ComCom/Buttons/InputRange/InputRange';
import DatePicker from '../../ComCom/DatePicker/DatePicker';
import InputText from '../../ComCom/InputText/InputText';

class CakeOrderDetails extends Component {

    state = {
        range : {
            min : 0.5,
            max : 4,
            step: 0.01,
            dimension: 'кг'
        }
    }

    render(){
        return(
            <div className="cakeOrderDetails">
                <div className="title">Выберте вес торта:</div>
                <InputRange 
                    min = {this.state.range.min}
                    max = {this.state.range.max}
                    step = {this.state.range.step}
                    dimension = {this.state.range.dimension}/>
                <div className="title">Выберте дату заказа:</div>
                <DatePicker/>
                <div className="title">Комментарий к заказу:</div>
                <InputText
                    placeholder = 'Напишите здесь все что вам хотелось бы видеть в торте, оставтьте информацию о ваших прдпочтениях, аллергиях и т.д.'/>
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
