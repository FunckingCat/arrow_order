import React, {Component} from 'react';
import {connect} from 'react-redux';
import './WikiMenu.scss';

import WikiItem from '../MenuItem/MenuItem';

class WikMenu extends Component {
	render() {
		return(
			<section className = 'WikiMenu'> 
				<h1>Вики</h1>
				<h2>Все что вам нужно знать</h2>
				<li>
					<WikiItem />
					<WikiItem />
					<WikiItem />
				</li>
			</section>
		)
	}
}

export default connect()(WikMenu)