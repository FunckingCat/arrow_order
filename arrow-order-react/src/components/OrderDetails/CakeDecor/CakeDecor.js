import React,{Component} from 'react';
import './CakeDecor.scss'; 
import {connect} from 'react-redux'; 

import CheckList from '../../ComCom/InfoView/CheckList/CheckList';
import ColorPicker from '../../ComCom/SevColorPicker/SevColorPicker';
import TransLink from '../../ComCom/Buttons/TransLink/TransLink';

class CakeDecor extends Component {

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
        
    })
} 

const mapDispatchToProps = {

} 

export default connect(mapStateToProps, mapDispatchToProps)(CakeDecor)
