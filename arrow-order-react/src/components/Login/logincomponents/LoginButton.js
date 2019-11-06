/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import {Link} from "react-router-dom";
export default class LoginButton extends Component {

    highlight = () => {

        if (this.props.nameIsValid && this.props.contactIsValid){
            document.querySelector('.login form>a>input').style.background = 'black';
        }else{
            document.querySelector('.login form>a>input').style.background = '#787878';
        }
    }

    createUser = () => {
        if (this.props.nameIsValid && this.props.contactIsValid){
            this.props.setChache();
        }
    }

    componentDidMount() {
        this.highlight();
    }

    componentDidUpdate() {
        this.highlight();
    }

    render() {
        let {nameIsValid: NIV, contactIsValid: CIV} = this.props;
        return(
            <Link to = {(NIV && CIV)? '/MainPage' : '#'}>
                <input type="button" value="SIGN IN" onClick = {this.createUser}/>
            </Link>
        )
    }
}