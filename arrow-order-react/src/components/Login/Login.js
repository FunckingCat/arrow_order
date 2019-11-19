/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './Login.css';

import InputField from './logincomponents/InputField/InputField';
import LoginButton from './logincomponents/LoginButton/LoginButton';
import Animator from '../Animator/Animator';
import logo from './logo.svg';

export default class Login extends Component {

    render() {
        return(
            <Animator type = 'rise'>
                <div className="login">
                <div className="logo"><img src={logo} alt="ArrowOrder"/></div>
                
                <Animator type = 'fade' timeout = '450'>
                <form>

                    <InputField 
                        type = 'name' />

                    <InputField
                        type = 'contact' />

                    <LoginButton />

                    <div className="copyright">
                        <Link to = '/'>by @arrowcook</Link>
                    </div>

                </form>
                </Animator>
            </div>
            </Animator>
        )
    }
}