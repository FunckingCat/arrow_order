/* eslint-disable eqeqeq */
import React, {Component} from 'react';

export default class InputField extends Component {

    state = {
        validate : this.props.validate,
        isValid : false,
        validText : '',
    }

    updateInfo = this.props.composeFunction;
    activate = this.props.activate;

    setColor = (element, color) => {
        element.nextSibling.nextSibling.style.color = color
    }

    validatePhone = (str)=> {
        const reg = /\d/gi
        let match = str.match(reg)
        if (match != null && match.length === 11 && (match[0] == 7 || match[0] == 8) && match[1] == 9){
            return `${match[0]}(${match[1]}${match[2]}${match[3]}) ${match[4]}${match[5]}${match[6]}-${match[7]}${match[8]}-${match[9]}${match[10]}`
        }
    return false
    }

    validateInsta = (str)=> {
        // eslint-disable-next-line no-useless-escape
        const reg = /^@*[\w\d\.]+$/ig
        let match = str.match(reg)
        if (match){
            return match[0]
        }
    return false
    }

    validate = (event) => {
        let value = event.target.value;
        if (value !== ''){
            if (this.state.validate){
                if (value === "@"){
                    this.setState({validText : ''});
                    this.updateInfo(this.props.type, value, false);
                }else if (this.validatePhone(value)){
                    this.setState({validText : 'Корректный номер'});
                    this.setColor(event.target, 'green');
                    this.updateInfo(this.props.type, value, true);
                }else if (this.validateInsta(value)){
                    this.setState({validText : 'Корректный инстаграм'});
                    this.setColor(event.target, 'green');
                    this.updateInfo(this.props.type, value, true);
                }else{
                    this.setState({validText : 'Некорректный ввод'});
                    this.setColor(event.target, 'rgb(134, 0, 0)');
                    this.updateInfo(this.props.type, '', false);
                }
            }else{
                this.setState({validText : ''});
                this.updateInfo(this.props.type, value, true);
            }
        }else{
            this.setState({validText : 'Обязательное поле'});
            this.setColor(event.target, 'rgb(134, 0, 0)');
            this.updateInfo(this.props.type, '', false);
        }
    }

    render() {
        return(
            <div>
               <input type="text" defaultValue = {this.props.value} onInput={this.validate} placeholder={this.props.placeholder}/>
               <hr/>
               <div className="valid">{this.state.validText}</div>
            </div>
        )
    }
}