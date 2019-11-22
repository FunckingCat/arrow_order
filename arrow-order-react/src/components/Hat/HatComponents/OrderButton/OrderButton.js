/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {initTransfer} from '../../../../actions/historyActions';
import './OrderButton.scss';
import arrow from './RightArrow.svg';
import {Link} from "react-router-dom";


class OrderButton extends Component {

    handaleClick = (event) => {
        this.props.transfer('Продукция', '/Products')
    }

    render() {
        return(
            <Link to ="/Products" onClick = {this.handaleClick}> 
                <div className="button">
                    <div className="text">Заказать</div>
                    <div className="arrow"><img src={arrow} alt=""/></div>
                </div>
            </Link>
        )
    }
}

const mapDispatchToProps = {
    transfer : initTransfer
}

export default connect (null, mapDispatchToProps)(OrderButton)