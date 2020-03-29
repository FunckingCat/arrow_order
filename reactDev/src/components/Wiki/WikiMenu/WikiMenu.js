import React, {Component} from 'react';
import {connect}          from 'react-redux';
import './WikiMenu.scss';

import RequestService from '../../../servises/requestService';
import Menu           from '../../ComCom/Menu/Menu';

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

	render() {
		let {title, slogan, menuItems} = this.state
		return(
			<Menu 
				title = {title}
				slogan = {slogan}
				menuItems = {menuItems}/>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		domen : state.domen
	}
}

export default connect(mapStateToProps)(WikMenu)