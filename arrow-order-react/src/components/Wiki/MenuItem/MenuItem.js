import React, {Component} from 'react';
import './MenuItem.scss';

export default class WikiItem extends Component {
	render() {
		let {src, title} = this.props;
		return(
			<ul className="WikiItem">
				<div>{title}</div>
			</ul>
		)
	}
}