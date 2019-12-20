import React, {Component} from 'react';
import {connect} from 'react-redux';
import './WikiCard.scss';

import Cross from '../../BurgerMenu/MenuComponents/Cross/Cross';
import Animator from '../../ComCom/Animator/Animator';
import RequestService from '../../../servises/requestService';
import Bg from '../../ComCom/Bg/Bg';

class WikCard extends Component {

	RequestService = new RequestService();

	state = {
		titile : '',
		text   : '',
		image  : '',
	}

	componentDidMount() {
		this.update();
	}

	update = () => {
		this.RequestService.getWikiCard(this.props.hashtag)
		.then(res => {
			this.setState({
				title : res.title,
				text   : res.text,
				image  : res.image,
			})
		})
	}

	render() {

		return(
			<div className='WikiCard'>
				<Animator type = 'fade'><h1>{this.state.title}</h1></Animator>
				<Animator 
					type = 'rise'
					timeout = '100'>
					<Bg src = {this.state.image}></Bg>
				</Animator>
				<Animator 
					type = 'fade'
					timeout = '50'>
					<div className = 'content'>{this.state.text}</div>
					<Cross/>
				</Animator>
			</div>
		)
	}
}

export default connect()(WikCard)