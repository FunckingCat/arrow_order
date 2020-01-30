import React,{Component} from 'react';
import './CakeController.scss'; 
import {connect} from 'react-redux';
import RecuestService from '../../../../servises/requestService';

import CakeView from '../CakeView/CakeView';

import {popUpActive} from '../../../../actions/popUpActions';

class CakeController extends Component {

    requestService = new RecuestService(this.props.domen);

    state = {
        prevParts : this.props.parts,
        biscuitIcon : '',
        fillingIcon : '',
        creamIcon   : '',
    }

    componentDidMount() {
        this.getIcons();
    }

    componentDidUpdate() {
        if (this.props.parts.biscuit !== this.state.prevParts.biscuit ||
            this.props.parts.filling !== this.state.prevParts.filling ||
            this.props.parts.cream !== this.state.prevParts.cream){
                this.getIcons();
            }
    }

    getIcons = () => {
        this.requestService.getCakeIcons(this.props.parts)
        .then((res) => {
            console.log(res);
            this.setState({
                biscuitIcon : res.biscuitIcon,
                fillingIcon : res.fillingIcon,
                creamIcon : res.creamIcon,
                prevParts : this.props.parts,
            })
        })
    }

    render(){
        return(
            <CakeView
                biscuitIcon = {this.state.biscuitIcon}
                fillingIcon = {this.state.fillingIcon}
                creamIcon = {this.state.creamIcon}/>
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
