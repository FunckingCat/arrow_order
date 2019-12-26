import React,{Component} from 'react';
import './BlackButton.scss'; 

export default class BlackButton extends Component {

 render(){
    return(
        <button 
            className = 'BlackButton'
            closeable={this.props.closeable}
            onClick = {this.props.onClick}>
            {this.props.text}
        </button>
    )
 }
}
