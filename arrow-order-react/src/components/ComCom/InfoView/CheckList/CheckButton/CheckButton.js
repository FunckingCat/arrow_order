import React,{Component} from 'react';
import './CheckButton.scss'; 

export default class CheckButton extends Component {
    handaleClick = (event) => {
        if (!this.props.active){
           event.preventDefault()
           return
        }
        if (!this.props.onChange){
            console.error('Нет коллбэка');
            return
        }
        this.props.onChange(event.target.dataset.value, event.target.checked);
    }

    render(){
        let textColor = this.props.active? 'black' : 'grey';

        let style = {
            color : textColor,
        }

        let icon = this.props.icon? <img src={this.props.icon} alt="ArrowCook"/> : false;

        return(
            <li className = 'check' style = {style}>
                <input 
                    type="checkbox" 
                    name = {this.props.name}
                    onChange = {this.handaleClick} 
                    className = 'checkButton'
                    data-value = {this.props.name} 
                    id = {'check' + this.props.name}/>
                <div className="checkMark">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                        <polyline className="path check" fill="none" stroke="#73AF55" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                    </svg>
                </div>
                <label htmlFor={'check' + this.props.name}>
                    <div className = 'icon'>
                        {icon}
                    </div>
                    <div className = 'text'>{this.props.name}</div>
                </label>
            </li>
        )
    }
}
