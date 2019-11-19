/* eslint-disable eqeqeq */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setUserNAme, setUserContact} from '../../../../actions/loginActions'

class InputField extends Component {

    state = {
        valueFromChache : this.getChache(),
        placeholder : this.props.type ==='name'? 'Ваше имя':'Instagram / WhatsApp'
    }

    getChache(){
        if (localStorage.getItem('user')){
            const user = JSON.parse(localStorage.getItem('user'));
            switch (this.props.type){
                case 'name':
                    this.props.updateName(user.name)
                    return user.name
                case 'contact':
                    this.props.updateContact(user.contact)
                    return user.contact
                default:
                    return undefined
            }
        }
    }

    setColor = (element, color) => { //red color = 'rgb(134, 0, 0)'
        element.nextSibling.nextSibling.style.color = color
    }

    update = (event) => {
        const value = event.target.value;
        switch (this.props.type){
            case 'name':
                this.props.updateName(value);
                break;
            case 'contact':
                this.props.updateContact(value)
                break;
            default:
                return undefined
        }
    }

    render() {
        return(
            <div>
                <input type="text" defaultValue = {this.state.valueFromChache} onInput={this.update} placeholder={this.state.placeholder}/>
                <hr/>
                <div className="valid">{this.props.type === 'contact'? this.props.message : ''}</div>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        message : state.login.contactMessage
    }
}

const mapDispatchToProps = {
    updateName :  setUserNAme,
    updateContact : setUserContact
}

export default connect(mapStatetoProps, mapDispatchToProps)(InputField)