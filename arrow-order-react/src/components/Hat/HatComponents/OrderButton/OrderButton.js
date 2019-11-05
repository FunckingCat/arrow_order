/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import './OrderButton.css';
import arrow from './RightArrow.svg';
import {Link} from "react-router-dom";


export default class OrderButton extends Component {
    render() {
        return(
            <Link to ="/Products">
                <div className="button">
                    <div className="text">Заказать</div>
                    <div className="arrow"><img src={arrow} alt=""/></div>
                </div>
            </Link>
        )
    }
}