/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Cross.scss';
import CrossIcon from './Cross.svg';
import {Link} from "react-router-dom";
import {back} from '../../../../actions/historyActions'

class Cross extends Component {

    handaleClick = (event) => {
        this.props.goBack()
    }

    render(){
        return(
            <Link to ={this.props.href} className = 'exit' onClick = {this.handaleClick}>
                <img src={CrossIcon} alt="" className="cross"/>
            </Link>            
        )
    }
}

const mapStateToProps = (state) => {
    return{
        href : state.history.backLink
    }
}

const mapDispatchToProps = {
    goBack : back
}

export default connect(mapStateToProps, mapDispatchToProps)(Cross)