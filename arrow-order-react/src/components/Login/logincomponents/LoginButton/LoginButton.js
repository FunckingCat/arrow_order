import React, {Component} from 'react';
import {connect} from 'react-redux';
import {initTransfer} from '../../../../actions/historyActions';
import {Link} from "react-router-dom";

import RequestService from '../../../../servises/requestService';


class LoginButton extends Component {

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
        if(this.props.highlighted){
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
            console.log(user);
            this.RS.postNewUser(JSON.stringify(user))
        }
    }

    render() {
        const {highlighted} = this.props;
        let style = {
            backgroundColor : highlighted? 'black' : '#bbbbbb'
        }
        return(
            <Link to = {highlighted? '/MainPage' : '#'} onClick = {this.handaleClick} style = {style}>
                SIGN IN
            </Link>
        )
    }
}

const mapStatetoProps = (state) => {
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

export default connect(mapStatetoProps, mapDispatchToProps)(LoginButton)