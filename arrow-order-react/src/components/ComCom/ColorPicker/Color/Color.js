import React,{Component} from 'react';
import './Color.scss'; 

export default class Color extends Component {

    to16 = (number) => {
        if (number < 0) {
            return '#000000'
        } else if (number > 16777215){
            return '#ffffff'
        }
        const shift = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
        let res = '';
        let temp = number;
        while (temp > 0){
            let rest = temp % 16;
            temp = Math.floor(temp/16);
            res += shift[rest];
        }
        while (res.length < 6){
            res = res + '0'
        }
        return '#' + res.split("").reverse().join("")
    }

    makeGradient = (color, shift = 10000) => {
        color = parseInt(color.slice(1), 16);        
        let col1 = this.to16(color - shift);
        let col2 = this.to16(color + shift);
        console.log(col1, col2);
        //return this.to16(color - shift)
        return `linear-gradient(45deg, ${col1}, ${col2})`
    }

    render(){
        let style = {
            background : this.makeGradient(this.props.color, this.props.shift),
        }
        return(
            <li className = 'color' onClick = {this.handaleClick}>
                <input 
                    type="radio" 
                    name = 'colors'
                    onChange = {this.props.onChange} 
                    className = 'colorInput'
                    data-value = {this.props.color} 
                    id = {this.props.color}/>
                <div className="checkarrow">
                <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M 42.875 8.625 C 42.84375 8.632813 42.8125 8.644531 42.78125 8.65625 C 42.519531 8.722656 42.292969 8.890625 42.15625 9.125 L 21.71875 40.8125 L 7.65625 28.125 C 7.410156 27.8125 7 27.675781 6.613281 27.777344 C 6.226563 27.878906 5.941406 28.203125 5.882813 28.597656 C 5.824219 28.992188 6.003906 29.382813 6.34375 29.59375 L 21.25 43.09375 C 21.46875 43.285156 21.761719 43.371094 22.050781 43.328125 C 22.339844 43.285156 22.59375 43.121094 22.75 42.875 L 43.84375 10.1875 C 44.074219 9.859375 44.085938 9.425781 43.875 9.085938 C 43.664063 8.746094 43.269531 8.566406 42.875 8.625 Z"/></svg>
                </div>
                <label 
                    className = 'colorLabel' 
                    style = {style}
                    htmlFor={this.props.color}>    
                </label>
            </li>
        )
    }
}
