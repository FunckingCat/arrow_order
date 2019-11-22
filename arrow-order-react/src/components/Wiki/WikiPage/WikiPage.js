import React, {Component} from 'react';
import {connect} from 'react-redux';
import './WikiPage.scss';

import Hat from '../../Hat/Hat';
import BurgerButton from '../../Hat/HatComponents/BurgerButton/BurgerButton';
import BackButton from '../../Hat/HatComponents/BackButton/BackButton';
import NavVidget from '../../NavVidget/NavVidget';

class WikiPage extends Component {
	render() {
		return(
			<div className='WikiWrapper'>
				<Hat 
					left = {<BackButton />}
					middle = {<div>Вики</div>}
					right = {<BurgerButton />}/>
				<section className='WikiPage'>
					<NavVidget />
				</section>
			</div>
		)
	}
}

export default connect()(WikiPage)