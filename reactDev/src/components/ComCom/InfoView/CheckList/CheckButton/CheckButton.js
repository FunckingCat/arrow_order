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
                    <div className="check"></div>
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
