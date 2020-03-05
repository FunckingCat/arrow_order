import React,{Component} from 'react';
import './CheckList.scss'; 

import CheckButton from './CheckButton/CheckButton';

export default class CheckList extends Component {

    renderItems = (items) => {
        let res = [];
        for (let i = 0; i < items.length; i++){
            res.push(
                <CheckButton
                    text = {items[i]}
                    key = {i}
                    active = 'true'/>
            )
        }
        return res
    }

    render(){

        let itemsList = this.renderItems(this.props.items)

        return(
            <div className="checkList">
                <div className="title">{this.props.title}</div>
                <div className="list">
                    {itemsList}
                </div>
            </div>
        )
    }
}
