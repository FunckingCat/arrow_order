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
        return(
            <li className = 'radio' style = {style} onClick = {this.handaleClick}>
                <input 
                    type="radio" 
                    name = {this.props.name}
                    onChange = {this.props.onChecked} 
                    className = 'radioButton'
                    data-value = {this.props.text} 
                    id = {'radio' + this.props.id}/>
                <label htmlFor={'radio' + this.props.id}>
                    <div className = 'icon'><img src={this.props.icon} alt="icon"/></div>
                    <div className = 'text'>{this.props.text}</div>
                </label>
            </li>
        )
    }
}
