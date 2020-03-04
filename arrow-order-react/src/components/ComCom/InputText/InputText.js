import React,{Component} from 'react';
import './InputText.scss'; 

export default class InputText extends Component {

    handaleInput = (e) => {
        this.props.onInput(e.target.value)
    }

    render(){
        let title = this.props.title || 'Здесь вы можете оставить комментарий к своему заказу'
        let placeholder = this.props.placeholder || 'Напишите здесь все что вам хотелось бы видеть в торте, оставтьте информацию о ваших прдпочтениях, аллергиях и т.д.'
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
