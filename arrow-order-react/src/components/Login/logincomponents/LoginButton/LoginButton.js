/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {initTransfer} from '../../../../actions/historyActions';


class LoginButton extends Component {

    handaleClick = (event) => {
        if(this.props.highlighted){
            let user = JSON.stringify({name : this.props.name, contact : this.props.contact})
            localStorage.setItem('user', user);
            this.props.transitTo('Главная', '/MainPage')
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
        contact : state.login.contact
    }
}

const mapDispatchToProps = {
    transitTo : initTransfer
}

export default connect(mapStatetoProps, mapDispatchToProps)(LoginButton)