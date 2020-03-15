import React,{Component} from 'react';
import './RadioButton.scss'; 

export default class RadioButton extends Component {

    handaleClick = (event) => {
        if (!this.props.active){
           event.preventDefault()
        }
    }

    render(){
        let textColor = this.props.active? 'black' : 'grey';

        let style = {
            color : textColor,
        }

        let id = Math.random();

        return(
            <li className = 'radio' style = {style} onClick = {this.handaleClick}>
                <input 
                    type="radio" 
                    name = {this.props.name}
                    onChange = {this.props.onSelect} 
                    className = 'radioButton'
                    data-value = {this.props.text} 
                    id = {id}/>
                <span className="the-arrow -left">
                    <span className="shaft"></span>
                </span>
                <label htmlFor={id}>
                    <div className = 'icon'>{this.props.icon}</div>
                    <div className = 'text'>{this.props.text}</div>
                </label>
            </li>
        )
    }
}
