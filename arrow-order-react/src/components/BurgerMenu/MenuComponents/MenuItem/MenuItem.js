/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import './MenuItem.css';
import {Link} from "react-router-dom";

export default class MenuItem extends Component {
    render(){
        return(
            <Link to ={this.props.href}>
                <div className="menuitem">
                    {this.props.text}
                </div>
            </Link>            
        )
    }
}