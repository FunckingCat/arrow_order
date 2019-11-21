import React, {Component} from 'react';
import {connect} from 'react-redux';
import back from './back.svg';
import './BackButton.scss';

class BackButton extends Component {
	render() {
		return(
			<div className="backButton">
				<img src={back} alt="back"/>
				Назад
			</div>
		)
	}
}

export default connect()(BackButton)