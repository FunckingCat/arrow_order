import React,{Component} from 'react';
import './CheckButton.scss'; 

export default class CheckButton extends Component {
    handaleClick = (event) => {
        if (!this.props.active){
           event.preventDefault()
           return
        }
        console.log(event.target.dataset.value);
    }

    render(){
        let textColor = this.props.active? 'black' : 'grey';

        let style = {
            color : textColor,
        }

        return(
            <li className = 'check' style = {style}>
                <input 
                    type="checkbox" 
                    name = {this.props.text}
                    onChange = {this.handaleClick} 
                    className = 'checkButton'
                    data-value = {this.props.text} 
                    id = {'check' + this.props.text}/>
                <div className="checkMark">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                        <polyline className="path check" fill="none" stroke="#73AF55" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                    </svg>
                </div>
                <label htmlFor={'check' + this.props.text}>
                    <div className = 'icon'>{this.props.icon}</div>
                    <div className = 'text'>{this.props.text}</div>
                </label>
            </li>
        )
    }
}
