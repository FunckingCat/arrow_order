import React, {Component} from 'react';
import {connect}          from 'react-redux';
import './WikiMenu.scss';

import RequestService from '../../../servises/requestService';
import Animator       from '../../ComCom/Animator/Animator';
import WikiItem       from '../MenuItem/MenuItem';

class WikMenu extends Component {
	RequestService = new RequestService(this.props.domen);

	state = {
		title     : '',
		slogan    : '',
		menuItems : [],		
	}

	componentDidMount() {
		this.updateMenuItems();
	}

	updateMenuItems = () => {
		this.RequestService.getWiki(this.props.id)
		.then(this.onContentLoaded)
		.catch()
	}

	onContentLoaded = (content) => {
		this.setState({
			title     : content.title,
			slogan    : content.slogan,
			menuItems : content.items,
		})
	}

	renderMenuItems = () => {
		const menuItems = this.state.menuItems;
		let renderedItems = [];
		
		for (let i=0; i < menuItems.length; i++){
			renderedItems.push(
				<Animator
					key     = {menuItems[i].title} 
					type    = 'fade'
					timeout = {i * 30}>
					<WikiItem
						key   = {menuItems[i].title}
						title = {menuItems[i].title}
						src   = {menuItems[i].image}
						href  = {`${menuItems[i].href}${menuItems[i].id}` || '#'}/>
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
					<h1>{this.state.title}</h1>
					<h2>{this.state.slogan || ''}</h2>
				</Animator>
				<ul>
					{menuItems}
				</ul>
			</section>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		domen : state.domen
	}
}

export default connect(mapStateToProps)(WikMenu)