/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import './Cross.css'
import CrossIcon from './Cross.svg'

export default class Cross extends Component {
    render(){
        return(
            <a href={this.props.href} className = 'exit'>
                <img src={CrossIcon} alt="" className="cross"/>
            </a>            
        )
    }
}