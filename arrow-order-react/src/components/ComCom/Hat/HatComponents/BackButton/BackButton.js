import React, {Component} from 'react';
import {connect} from 'react-redux';
import {back} from '../../../../../actions/historyActions';
import backIcon from './back.svg';
import './BackButton.scss';

class BackButton extends Component {

	handleClick = () => {
		this.props.goBack();
		window.history.back();
	}

	render() {
		return(
			<div className="backButton" onClick = {this.handleClick}>
				<img src={backIcon} alt="back"/>
				Назад
			</div>
		)
	}
}

const mapPropsToDispatch = {
	goBack : back
}

export default connect(null, mapPropsToDispatch)(BackButton)