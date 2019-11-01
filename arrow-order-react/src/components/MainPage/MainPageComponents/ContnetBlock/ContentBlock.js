/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import './ContentBlock.css'

export default class ContentBlock extends Component {
    render() {
        return(
            <div className="content">
                <h2>{this.props.header}</h2>
                <p>{this.props.text}</p>
            </div>
        )
    }
}