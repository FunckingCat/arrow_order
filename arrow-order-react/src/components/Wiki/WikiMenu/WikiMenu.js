import React, {Component} from 'react';
import {connect} from 'react-redux';
import './WikiMenu.scss';

import RequestService from '../../../servises/requestService';
import Animator from '../../ComCom/Animator/Animator';
import WikiItem from '../MenuItem/MenuItem';

class WikMenu extends Component {
	RequestService = new RequestService();

	state = {
		type : this.props.type? this.props.type : "Вики",
		menuItems : [],
		slogan : ''
	}

	componentDidMount() {
		this.updateMenuItems();
		this.getSlogan();
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

	getSlogan = () => {
		this.RequestService.getWikiSlogan(this.state.type)
		.then((slogan) => {
			this.setState({
				slogan : slogan
			})
		})
		.catch()
	}

	renderMenuItems = () => {
		const menuItems = this.state.menuItems;
		let renderedItems = [];
		
		for (let i=0; i < menuItems.length; i++){
			renderedItems.push(
				<Animator
					key = {menuItems[i].title} 
					type = 'fade'
					timeout = {i * 30}>
					<WikiItem
						key = {menuItems[i].title}
						title = {menuItems[i].title}
						src = {menuItems[i].image}
						href = {menuItems[i].href || '#'}/>
				</Animator>
			)
		}

		return renderedItems
	}

	render() {

		let menuItems = this.renderMenuItems()

		return(
			<section className = 'WikiMenu'> 
				<Animator type = 'fade'>
					<h1>{this.props.type || 'Вики'}</h1>
					<h2>{this.state.slogan || 'Все что нужно знать'}</h2>
				</Animator>
				<ul>
					{menuItems}
				</ul>
			</section>
		)
	}
}

export default connect()(WikMenu)