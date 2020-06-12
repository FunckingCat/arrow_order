/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import {connect}          from 'react-redux';
import {initTransfer}     from '../../../../actions/historyActions';
import {Link}             from "react-router-dom";
import './MenuItem.scss';

class MenuItem extends Component {
    
    handaleClick = (event) => {
        this.props.transfer(this.props.text, this.props.href)
    }

    render(){
        return(
            <Link to ={this.props.href} onClick = {this.handaleClick}>
                <div className="item-container">
                    <ul>
                        <li>
                        <div className="animated-arrow">
                            <span className="the-arrow -left">
                            <span className="shaft"></span>
                            </span>
                            <span className="main">
                            <span className="text">
                                {this.props.text}
                            </span>
                            </span>
                        </div>
                        </li>
                    </ul>
                </div>
            </Link>            
        )
    }
}

const mapDispatchToProps = {
    transfer : initTransfer
}

export default connect(null, mapDispatchToProps)(MenuItem)