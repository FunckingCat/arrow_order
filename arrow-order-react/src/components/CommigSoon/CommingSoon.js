import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './CommingSoon.css';
import Robot from './Robot.svg';


export default class Error extends Component {
    render() {
        return(
            <div className="CommingSoon">
                <img src={Robot} alt=""/>
                <h2>Пока здесь нет страницы</h2>
                <p><Link to="/MainPage"> На главную </Link></p>
            </div>
        )
    }
}