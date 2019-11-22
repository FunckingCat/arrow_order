/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import './Cross.scss';
import CrossIcon from './Cross.svg';
import {Link} from "react-router-dom";

export default class Cross extends Component {
    render(){
        return(
            <Link to ={this.props.href} className = 'exit'>
                <img src={CrossIcon} alt="" className="cross"/>
            </Link>            
        )
    }
}