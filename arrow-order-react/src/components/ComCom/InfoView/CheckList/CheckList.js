import React,{Component} from 'react';
import './CheckList.scss'; 

import CheckButton from './CheckButton/CheckButton';

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
        console.log(selected);
        // if (!this.onChange){
        //     console.error('Нет коллбэка');
        //     return 
        // }
        // this.onChange(selected)
        this.setState({
            selected : selected,
        })
    }

    renderItems = (items) => {
        let res = [];
        for (let i = 0; i < items.length; i++){
            res.push(
                <CheckButton
                    text = {items[i]}
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
