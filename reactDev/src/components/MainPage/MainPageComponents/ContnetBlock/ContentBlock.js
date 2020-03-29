/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import './ContentBlock.scss'

export default class ContentBlock extends Component {
    
    render() {
        let header = '';
        if(this.props.header){
            header = <h2>{this.props.header}</h2>
        }

        return(
            <div className="content">
                {header}
                <p>{this.props.text}</p>
            </div>
        )
    }
}