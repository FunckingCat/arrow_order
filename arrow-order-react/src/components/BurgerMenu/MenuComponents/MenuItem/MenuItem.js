/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import './MenuItem.css'

export default class MenuItem extends Component {
    render(){
        return(
            <a href={this.props.href}>
                <div className="menuitem">
                    {this.props.text}
                </div>
            </a>            
        )
    }
}