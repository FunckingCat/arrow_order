import React, {Component} from 'react';
import {connect} from 'react-redux';
import RequestSevice from '../../servises/requestService';
import logo from './ArrowCook.svg';
import './BurgerMenu.scss';

import Animator from '../ComCom/Animator/Animator';
import MenuItem from './MenuComponents/MenuItem/MenuItem';
import Cross    from './MenuComponents/Cross/Cross';
import Error    from '../ComCom/ErrorMassage/Error.js';
import Arrow    from './MenuComponents/VerticalArrow/VerticalArrow';


class BurgerMenu extends Component {

    RequestSevice = new RequestSevice(this.props.domen);

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
                text = {items[i].title}
                href = {items[i].href}/>);
            result.push(<hr key = {i + 0.1}></hr>)
        }
        return result
    }

    render() {

        let menuItems = this.renderMenuItems(this.state.items)
        menuItems.push(<Cross key = 'cross' href = '/MainPage' />)
        if (this.state.error){
            menuItems = <Error />
        }
        return(
           <Animator type = 'fade' >
                <div className = 'burgerMenu'>
                    <Arrow />
                    <div className="wrapper">
                        <div className="logo"><img src={logo} alt=""/></div>
                        <nav>
                        {menuItems}
                        </nav>
                    </div>
                </div>
           </Animator>
        )
    }
}

const mapStateToProps = (state) => {
	return {
		domen : state.domen
	}
}

export default connect(mapStateToProps)(BurgerMenu)