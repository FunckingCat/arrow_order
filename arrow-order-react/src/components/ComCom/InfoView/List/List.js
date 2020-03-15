import React,{Component} from 'react';
import './List.scss';

import RadioButton    from '../../Buttons/RadioButton/RadioButton';

//Для работы этосу компоненту нужно:
// title - заголовок
// items {
//     name
//     icon
// }
// active - список активых элементов
// onSelect - функция вызываемая при переключении элементов

export default class List extends Component {

    state = {
        selected : '',
    }

    onSelect = (event) => {
        this.setState({
            selected : event.target.dataset.value,
        })
        if (!this.props.onSelect){
            console.log('Нет коллбэка в List');
            return
        }
        return this.props.onSelect(event.target.dataset.value)
    }

    renderRadio = () => {
        let {items, active, title} = this.props
        let radioButtons = []
        let i = 1;
        for (let item of items){
            radioButtons.push(
                <RadioButton 
                    id = {i++} 
                    name = {'RB' + title} 
                    key = {i + Math.random()} 
                    text = {item.name}
                    selected = {this.state.selected}
                    icon = {item.icon}
                    active = {active === 'all' || active.includes(item.name)}
                    onSelect = {this.onSelect}
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
