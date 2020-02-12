import React,{Component} from 'react';
import './Day.scss'; 

export default class Day extends Component {

    handaleChange = (event) => {
        if (this.props.active === 'true'){
            this.props.onChange(event);
        } else {
            event.preventDefault()
        }
    }

    render(){

        let style = {
            height : this.props.width,
            width : this.props.width,
            color : this.props.active === 'true'? 'black' : 'grey'
        }

        return(
            <li  style = {style} className = 'day' onClick = {this.handaleClick}>
                <input 
                    type="radio"
                    name = {this.props.name}
                    onChange = {this.handaleChange} 
                    className = 'radioButton'
                    data-value = {this.props.date} 
                    id = {'radio' + this.props.id}/>
                <label htmlFor={'radio' + this.props.id}>
                    {this.props.date}
                </label>
            </li>
        )
    }
}

