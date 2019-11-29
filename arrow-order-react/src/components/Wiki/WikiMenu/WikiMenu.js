import React, {Component} from 'react';
import {connect} from 'react-redux';
import './WikiMenu.scss';

import RequestService from '../../../servises/requestService';
import WikiItem from '../MenuItem/MenuItem';

class WikMenu extends Component {
	RequestService = new RequestService();

	state = {
		type : this.props.type? this.props.type : "Вики",
		menuItems : []
	}

	componentDidMount() {
		this.updateMenuItems();
	}

	updateMenuItems = () => {
		this.RequestService.getWiki(this.state.type)
		.then(this.onContentLoaded)
		.catch()
	}

	onContentLoaded = (content) => {
		this.setState({
			menuItems : content
		})
	}

	renderMenuItems = () => {
		const menuItems = this.state.menuItems;
		let renderedItems = [];
		
		for (let i=0; i < menuItems.length; i++){
			renderedItems.push(<WikiItem
				key = {menuItems[i].title}
				title = {menuItems[i].title}
				src = {menuItems[i].image}
				href = {menuItems[i].href || '#'}/>)
		}

		return renderedItems
	}

	render() {

		let menuItems = this.renderMenuItems()

		return(
			<section className = 'WikiMenu'> 
				<h1>{this.props.title || 'Вики'}</h1>
				<h2>{this.props.slogan || 'Все что нужно знать'}</h2>
				<ul>
					{menuItems}
				</ul>
			</section>
		)
	}
}

export default connect()(WikMenu)