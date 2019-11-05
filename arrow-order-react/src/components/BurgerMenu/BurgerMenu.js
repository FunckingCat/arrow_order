import React, {Component} from 'react';
import MenuItem from './MenuComponents/MenuItem/MenuItem';
import Cross from './MenuComponents/Cross/Cross';
import Error from '../ErrorMassage/Error.js';
import './BurgerMenu.css';
import RequestSevice from '../../servises/requestService';
import arrow from './Arrow.svg';
import logo from './ArrowCook.svg';


export default class BurgerMenu extends Component {

    RequestSevice = new RequestSevice();

    state = {
        items : [],
        error : false
    }

    componentDidMount() {
        this.updateItems()
    }

    updateItems() {
        this.RequestSevice.getBurgerMenuContent()
        .then(this.onContentLoaded)
        .catch(this.onError)
    }

    onContentLoaded = (content) => {
        this.setState({
            items : content
        })
    }

    onError = () => {
        this.setState({
            items : [],
            error : true
        })
    }

    renderMenuItems(items) {
        let result = []
        for (let i = 0; i < items.length; i++){
            result.push(<MenuItem
                key = {i}
                text = {items[i].text}
                href = {items[i].href}/>);
            result.push(<hr key = {i + 0.1}></hr>)
        }
        return result
    }

    render() {

        let menuItems = this.renderMenuItems(this.state.items)
        menuItems.push(<Cross key = 'cross' href = '/MainPAge' />)
        if (this.state.error){
            menuItems = <Error />
        }
        return(
            <div className = 'burgerMenu'>
                <div className="arrow"><img src={arrow} alt="" className="logo"/></div>
                <div className="wrapper">
                    <div className="logo"><img src={logo} alt=""/></div>
                    <nav>
                       {menuItems}
                    </nav>
                </div>
            </div>
        )
    }
}