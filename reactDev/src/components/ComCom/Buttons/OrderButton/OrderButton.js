/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {initTransfer} from '../../../../actions/historyActions';
import './OrderButton.scss';
import {Link} from "react-router-dom";


class OrderButton extends Component {

    handaleClick = (event) => {
        this.props.transfer('Продукция', this.props.link)
    }

    render() {
        return(
            <Link to = {this.props.link} onClick = {this.handaleClick}> 
                <div className="button">
                    <div className="text">Заказать</div>
                    <div className="arrow">
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z" fill="white"/>
                    </svg></div>
                </div>
            </Link>
        )
    }
}

const mapDispatchToProps = {
    transfer : initTransfer
}

export default connect (null, mapDispatchToProps)(OrderButton)