import React,{Component} from 'react';
import './List.scss';

import RadioButton    from '../../ComCom/RadioButton/RadioButton';

//Для работы этосу компоненту нужно:
// title - заголовок
// items {
//     name
//     popUpIconSRC
// }
// activeItems - список активых элементов
// domen
// radioChecked - функция вызываемая при переключении элементов

export default class List extends Component {

    renderRadio = () => {
        let radioButtons = []
        let i = 1;
        for (let item of this.props.items){
            radioButtons.push(
                <RadioButton 
                    id = {i++} 
                    name = 'RB' 
                    key = {item.name + i + this.props.constant} 
                    text = {item.name}
                    icon = {this.props.domen + item.popUpIconSRC}
                    active = {this.props.activeItems.includes(item.name)}
                    onChecked = {this.props.radioChecked}
                    />
            )
        }
        return radioButtons
    }
    

    render(){

        let radioButtons = this.renderRadio()

        return(
            <div className="list">
                <h2>{this.props.title}</h2>
                <ul>
                    {radioButtons}
                </ul> 
            </div>
        )
    }
}
