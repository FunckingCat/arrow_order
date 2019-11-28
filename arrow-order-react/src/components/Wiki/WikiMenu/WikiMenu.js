import React, {Component} from 'react';
import {connect} from 'react-redux';
import './WikiMenu.scss';

import RequestService from '../../../servises/requestService';
import WikiItem from '../MenuItem/MenuItem';

class WikMenu extends Component {
	RequestService = new RequestService();

	state = {
		location : 'Wiki',
		menuItems : []
	}

	componentDidMount() {
		this.updateMenuItems();
	}

	updateMenuItems = () => {
		let items = this.RequestService.getWiki();
		console.log(items);
	}

	renderMenuItems = () => {
		let menuItems = []
		for (let i = 0; i < 6; i++){
			menuItems.push(<WikiItem key = {i} src = {`./MainPageImages/bg (${i}).png`} title = 'Бисквит'/>)
		}
		return menuItems
	}

	render() {

		let menuItems = this.renderMenuItems()

		return(
			<section className = 'WikiMenu'> 
				<h1>{this.props.title || 'Вики'}</h1>
				<h2>{this.props.slogan || ''}</h2>
				<li>
					{menuItems}
				</li>
			</section>
		)
	}
}

export default connect()(WikMenu)