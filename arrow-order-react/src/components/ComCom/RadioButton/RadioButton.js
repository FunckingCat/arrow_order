import React,{Component} from 'react';
import './RadioButton.scss'; 

export default class RadioButton extends Component {

 render(){
    return(
        <li className = 'radio'>
            <input 
                type="radio" 
                name = {this.props.name}
                onChange = {this.props.onChecked} 
                className = 'radioButton'
                data-value = {this.props.text} 
                id = {'radio' + this.props.id}/>
            <label htmlFor={'radio' + this.props.id}>
                {this.props.text}
            </label>
        </li>
    )
 }
}
