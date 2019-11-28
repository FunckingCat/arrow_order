import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './MenuItem.scss';

export default class WikiItem extends Component {
	render() {
		let {title} = this.props;

		let style = {
			backgroundImage: `url(${this.props.src})`
		}

		return(
			<li className="WikiItem" style = {style}>
				<div className = 'title'><Link to = {this.props.href}>{title}</Link></div>
			</li>
		)
	}
}