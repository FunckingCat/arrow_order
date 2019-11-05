import React, {Component} from 'react';

import './CommingSoon.css';
import Robot from './Robot.svg';


export default class Error extends Component {
    render() {
        return(
            <div className="CommingSoon">
                <img src={Robot} alt=""/>
                <h2>Пока здесь нет страницы</h2>
                <p>На главную</p>
            </div>
        )
    }
}