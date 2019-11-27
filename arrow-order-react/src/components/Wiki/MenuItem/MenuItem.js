import React, {Component} from 'react';
import {connect} from 'react-redux';
import './MenuItem.scss';
import image from './bg (2).png';

class WikiItem extends Component {
	render() {
		return(
			<ul className="WikiItem">
				<img src={image} alt=""/>
				<div>Готовые решения</div>
			</ul>
		)
	}
}

export default connect()(WikiItem)