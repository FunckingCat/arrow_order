import React,{Component} from 'react';
import './List.scss';

import RadioButton    from '../../Buttons/RadioButton/RadioButton';

//Для работы этосу компоненту нужно:
// title - заголовок
// items {
//     name
//     icon
// }
// activeItems - список активых элементов
// domen
// radioChecked - функция вызываемая при переключении элементов

export default class List extends Component {

    renderRadio = () => {
        let {items, activeItems, constant, domen, radioChecked, iconComponent} = this.props
        let radioButtons = []
        let i = 1;
        for (let item of items){
            radioButtons.push(
                <RadioButton 
                    id = {i++} 
                    name = 'RB' 
                    key = {item.name + i + constant} 
                    text = {item.name}
                    iconComponent = {iconComponent}
                    icon = {domen + item.icon}
                    active = {activeItems.includes(item.name)}
                    onChecked = {radioChecked}
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
