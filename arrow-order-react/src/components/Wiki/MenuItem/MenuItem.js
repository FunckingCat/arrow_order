import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {initTransfer} from '../../../actions/historyActions';
import './MenuItem.scss';

class WikiItem extends Component {

	handaleClick = () => {
		this.props.transfer(this.props.title, this.props.href);
	}

	render() {
		let {title} = this.props;

		let style = {
			backgroundImage: `url(${this.props.src})`
		}

		return(
			<Link to = {this.props.href} onClick = {this.handaleClick}>
			<li className="WikiItem" style = {style}>
				<div className = 'title'>{title}</div>
			</li>
			</Link>
		)
	}
}

const mapDispatchToProps = {
	transfer : initTransfer
}

export default connect(null, mapDispatchToProps)(WikiItem)