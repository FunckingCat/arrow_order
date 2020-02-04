import React,{Component} from 'react';
import './Textarea.scss'; 

export default class Textarea extends Component {

    render(){

        let style = this.props.active? {
            'maxHeight' : this.props.height
        } : {
            'maxHeight' : '0'
        }

        return(
            <p className="textarea" style = {style}>
                {this.props.children}
            </p>
        )
    }
}
