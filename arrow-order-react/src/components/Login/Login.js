/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import './Login.scss';

import InputField from './logincomponents/InputField/InputField';
import LoginButton from './logincomponents/LoginButton/LoginButton';
import Animator from '../ComCom/Animator/Animator';

class Login extends Component {
    render() {
        return(
            <Animator type = 'rise' timeout = '1000'>
                <div className="login" >
                <div className="logo"><img src={this.props.domen + '/static/logo.svg'} alt="ArrowOrder"/></div>
                
                <Animator type = 'fade' timeout = '1700'>
                <form>

                    <InputField 
                        type = 'name' />

                    <InputField
                        type = 'contact' />

                    <LoginButton />

                    <div className="copyright">
                        <Link to = '/Contacts'>pre-alpha v0.1</Link>
                    </div>

                </form>
                </Animator>
            </div>
            </Animator>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        domen : state.domen,
    }
}

export default connect(mapStateToProps)(Login)