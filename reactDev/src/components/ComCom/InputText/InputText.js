import React,{Component} from 'react';
import './InputText.scss'; 

export default class InputText extends Component {

    handaleInput = (e) => {
        if (!this.props.onInput){
            console.error('Не задана функция onInput, где коллбэк братан?');
            return
        }
        this.props.onInput(e.target.value)
    }

    render(){
        let title = this.props.title || '';
        let placeholder = this.props.placeholder || '';
        return(
            <div className="inputText" onInput = {this.handaleInput}>
                <div className="title">{title}</div>
                <textarea 
                    className = 'ta'
                    name="comment" 
                    id="" 
                    cols="10" 
                    rows="8"
                    placeholder = {placeholder}>
                    </textarea>
            </div>
        )
    }
}
