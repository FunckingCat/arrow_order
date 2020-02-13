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
        let colorDesigion = () => {
            let {red, active} = this.props;
            let color = 'black'
            if (red === 'true') color = '#b43131';
            if (active !== 'true') color = '#808080';
            return color
        }

        let style = {
            height : this.props.width,
            width : this.props.width,
            color : colorDesigion(),
        }

        let inner = (
            <>
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
            </>
        )

        if (this.props.active === 'false'){
            inner = this.props.date;
        }

        return(

            <li  style = {style} className = 'day' onClick = {this.handaleClick}>
                {inner}
            </li>
        )
    }
}

