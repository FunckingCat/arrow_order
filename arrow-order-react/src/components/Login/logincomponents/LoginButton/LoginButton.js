import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class LoginButton extends Component {     

    handaleClick = (event) => {
        if(this.props.highlighted){
            this.props.onClick()
        }
    }

    render() {
        const {active} = this.props;
        let style = {
            backgroundColor : active? 'black' : '#bbbbbb'
        }
        return(
            <Link to = {active? '/MainPage' : '#'} onClick = {this.handaleClick} style = {style}>
                SIGN IN
            </Link>
        )
    }
}