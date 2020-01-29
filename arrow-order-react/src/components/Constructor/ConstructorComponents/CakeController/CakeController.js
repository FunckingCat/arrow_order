import React,{Component} from 'react';
import './CakeController.scss'; 
import {connect} from 'react-redux';

import CakeView from '../CakeView/CakeView';

import {popUpActive} from '../../../../actions/popUpActions';

class CakeController extends Component {

    render(){
        return(
            <CakeView/>
        )
    }
} 

 const mapStateToProps = (state) => {
    return({
        parts : {
            filling : state.cakeParts.filling,
            biscuit : state.cakeParts.biscuit,
            cream   : state.cakeParts.cream,
        }
    })
} 

const mapDispatchToProps = {
    popUpActive : popUpActive,
} 

export default connect(mapStateToProps, mapDispatchToProps)(CakeController)
