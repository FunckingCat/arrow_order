import React,{Component} from 'react';
import './CakeController.scss'; 
import {connect} from 'react-redux';
import RecuestService from '../../../../servises/requestService';

import CakeView from '../CakeView/CakeView';

import {popUpActive} from '../../../../actions/popUpActions';

class CakeController extends Component {

    requestService = new RecuestService(this.props.domen);

    state = {
        biscuitIcon : '',
        fillingIcon : '',
        creamIcon   : '',
    }

    componentDidMount() {
        this.getIcons();
    }

    componentDidUpdate() {
        this.getIcons();
    }

    getIcons = () => {
        this.requestService.getCakeIcons(this.props.parts)
    }

    render(){
        return(
            <CakeView/>
        )
    }
} 

 const mapStateToProps = (state) => {
    return({
        domen : state.domen,
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
