import React, {Component} from 'react';
import {connect}          from 'react-redux';
import {Link}             from 'react-router-dom';
import {initTransfer}     from '../../../actions/historyActions';
import './MenuItem.scss';

import Bg from '../../ComCom/Bg/Bg';

class WikiItem extends Component {

	handaleClick = () => {
		this.props.transfer(this.props.title, this.props.href);
	}

	render() {

		return(
			<Link to = {this.props.href} onClick = {this.handaleClick}>
				<li className="WikiItem">
					<Bg src = {this.props.src} text = {this.props.title}></Bg>
				</li>
			</Link>
		)
	}
}

const mapDispatchToProps = {
	transfer : initTransfer
}

export default connect(null, mapDispatchToProps)(WikiItem)