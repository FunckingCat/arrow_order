import React,{Component} from 'react';
import './CheckList.scss'; 

import CheckButton from './CheckButton/CheckButton';

//PROPS
//title
//items : {
//     name,
//     icon
// }
//onChange

export default class CheckList extends Component {

    state = {
        selected : [],
    }

    onChange = (value, checked) => {
        let selected = this.state.selected;
        if (checked){
            selected.push(value)
        } else {
            selected = selected.filter(item => item !== value)
        }
        this.setState({
            selected : selected,
        })
        if (!this.props.onChange){
            console.error('Нет коллбэка');
            return 
        }
        this.props.onChange(selected)
    }

    renderItems = (items) => {
        let res = [];
        if (!items) {
            console.error('Не переданы элементы(CheckList)');
            return
        }
        for (let i = 0; i < items.length; i++){
            res.push(
                <CheckButton
                    name = {items[i].name}
                    icon = {items[i].icon}
                    key = {i}
                    active = 'true'
                    onChange = {this.onChange}/>
            )
        }
        return res
    }

    render(){

        let itemsList = this.renderItems(this.props.items)

        return(
            <div className="checkList">
                <div className="title">{this.props.title}</div>
                <ul className="list">
                    {itemsList}
                </ul>
            </div>
        )
    }
}
