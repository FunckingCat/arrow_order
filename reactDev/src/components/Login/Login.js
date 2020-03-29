/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {initTransfer} from '../../actions/historyActions';
import './Login.scss';

import RequestService from '../../servises/requestService';
import InputField from './logincomponents/InputField/InputField';
import LoginButton from './logincomponents/LoginButton/LoginButton';
import Animator from '../ComCom/Animator/Animator';

class Login extends Component {

    RS = new RequestService(this.props.domen)

    detectMob = () => {
        const toMatch = [
            /Android/i,
            /webOS/i,
            /iPhone/i,
            /iPad/i,
            /iPod/i,
            /BlackBerry/i,
            /Windows Phone/i
        ];

        for (let item of toMatch){
            if (navigator.userAgent.match(item)) return navigator.userAgent.match(item)[0];
        }
        return false
    }

    get_name_browser = () => {
        let ua = navigator.userAgent;  
        if (ua.search(/Yandex/) > 0) return 'Yandex';  
        if (ua.search(/Chrome/) > 0) return 'Google Chrome';
        if (ua.search(/Firefox/) > 0) return 'Firefox';
        if (ua.search(/Opera/) > 0) return 'Opera';
        if (ua.search(/Safari/) > 0) return 'Safari';
        if (ua.search(/MSIE/) > 0) return 'Internet Explorer';
        return 'Не определен';
    }
     

    handaleClick = (event) => {
        let user = JSON.stringify({
            name : this.props.name, 
            contact : this.props.contact
        })
        localStorage.setItem('user', user);
        this.props.transitTo('Главная', '/MainPage');
        user = {
            name      : this.props.name,
            contact   : this.props.contact,
            navigator : this.get_name_browser(),
            device    : this.detectMob() || 'desktop',
            width     : window.innerWidth,
            height    : window.innerHeight,
        }
        //console.log(user);
        this.RS.postNewUser(JSON.stringify(user))
    }

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

                    <LoginButton 
                        active = {this.props.highlighted}
                        onClick = {this.handaleClick}/>

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
        highlighted : Boolean(state.login.name && state.login.contact),
        name : state.login.name,
        contact : state.login.contact,
        domen : state.domen,
    }
}

const mapDispatchToProps = {
    transitTo : initTransfer
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)