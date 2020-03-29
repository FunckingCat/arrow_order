import React, {Component} from 'react';

import './Error.scss';

import Animator from '../Animator/Animator';
import ErrorIcon from '../Icons/Error';
import RebootArrow from '../Icons/RebootArrow';

export default class Error extends Component {

    render() {
        return(
            <Animator type = 'rise'>
                <div className="error">
                    <ErrorIcon/>
                    <h2>Network Error</h2>
                    <p>Упс, кажется возникли проблемы с сервером</p>
                    { this.props.status ?
                        <p>Статус ошибки {this.props.status}</p>
                        : false            
                    }
                    <button onClick = {() => window.location.reload()}>
                        <RebootArrow/>
                    </button>
                </div>
            </Animator>
        )
    }
}