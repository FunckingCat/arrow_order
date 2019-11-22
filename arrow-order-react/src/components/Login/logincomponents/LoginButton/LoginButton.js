/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {initTransfer} from '../../../../actions/historyActions';


class LoginButton extends Component {

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
            localStorage.setItem('user', user);
            this.props.transitTo('Главная', '/MainPage')
        }
    }

    render() {
        const {highlighted} = this.props;
        return(
            <Link to = {highlighted? '/MainPage' : '#'}>
                <input type="button" value="SIGN IN" onClick = {this.handaleClick}/>
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