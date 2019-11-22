import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import './Wiki.scss';

import Hat from '../Hat/Hat';
import BurgerButton from '../Hat/HatComponents/BurgerButton/BurgerButton';
import BackButton from '../Hat/HatComponents/BackButton/BackButton';
import NavVidget from '../NavVidget/NavVidget';
import WikiCard from './WikiCard/WikiCard.js';

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
					    <Switch>
                            <Route exact path = '/Wiki/Card' component = {WikiCard}/>
                        </Switch>
				    </section>			
			</div>
		)
	}
}

export default connect()(WikiPage)