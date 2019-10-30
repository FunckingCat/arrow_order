/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';

export default class LoginButton extends Component {

    highlight = () => {

        if (this.props.nameIsValid && this.props.contactIsValid){
            document.querySelector('.login>form>a>input').style.background = 'black';
        }else{
            document.querySelector('.login>form>a>input').style.background = '#787878';
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
        return(
            <a href="#"><input type="button" value="SIGN IN" onClick = {this.createUser}/></a>
        )
    }
}