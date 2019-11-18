/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import {Link} from "react-router-dom";


export default class LoginButton extends Component {

    componentDidMount(){
        this.highlight()
    }

    componentDidUpdate(){
        this.highlight()
    }

    highlight = () => {
        if (this.props.highlighted){
            document.querySelector('.login form>a>input').style.background = 'black';
        }else{
            document.querySelector('.login form>a>input').style.background = '#787878';
        }
    }

    handaleClick = (event) => {
        if(this.props.highlighted){
            let user = JSON.stringify({name : this.props.name, contact : this.props.contact})
            localStorage.setItem('user', user)
        }
    }

    render() {
        return(
            <Link to = '#'>
                <input type="button" value="SIGN IN" onClick = {this.handaleClick}/>
            </Link>
        )
    }
}