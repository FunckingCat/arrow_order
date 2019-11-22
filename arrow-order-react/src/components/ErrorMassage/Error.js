import React, {Component} from 'react';

import './Error.scss';
import ErrorImg from './ErrorImg.svg'
import rebootArrow from "./rebootArrow.svg"


export default class Error extends Component {
    render() {
        return(
            <div className="error">
                <img className = 'errorImg' src={ErrorImg} alt=""/>
                <h2>Network Error</h2>
                <p>Упс, кажется возникли проблемы с сервером</p>
                { this.props.status ?
                    <p>Статус ошибки {this.props.status}</p>
                    : false            
                }
                <button onClick = {() => window.location.reload()}> <img src={rebootArrow} alt=""/> </button>
            </div>
        )
    }
}