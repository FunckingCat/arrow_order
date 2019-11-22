import React, {Component} from 'react';
import {connect} from 'react-redux';
import Hat from '../../Hat/Hat';
import BurgerButton from '../../Hat/HatComponents/BurgerButton/BurgerButton';
import BackButton from '../../Hat/HatComponents/BackButton/BackButton';

class WikiPage extends Component {
	render() {
		return(
			<section>
				<Hat 
					left = {<BackButton />}
					right = {<BurgerButton />}/>
			</section>
		)
	}
}

export default connect()(WikiPage)