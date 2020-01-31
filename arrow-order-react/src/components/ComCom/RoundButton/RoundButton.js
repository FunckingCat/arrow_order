import React,{Component} from 'react';
import './RoundButton.scss'; 

export default class RoundButton extends Component {

 render(){
        return(
            <button className = 'RoundButton' onClick = {this.props.onClick}>
                <div className="icon"><img className = {this.props.scale? 'scale' : ''} src={this.props.src} alt=""/></div>
                <div className="caption">{this.props.children}</div>
            </button>
        )
    }
}
