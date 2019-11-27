import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import './Wiki.scss';

import Hat from '../ComCom/Hat/Hat';
import BurgerButton from '../ComCom/Hat/HatComponents/BurgerButton/BurgerButton';
import BackButton from '../ComCom/Hat/HatComponents/BackButton/BackButton';
import NavVidget from '../ComCom/NavVidget/NavVidget';
import WikiCard from './WikiCard/WikiCard.js';
import WikiMenu from './WikiMenu/WikiMenu';

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
							<Route path = '/Wiki' component = {WikiMenu}/>
                            <Route path = '/Wiki/Card' component = {WikiCard}/>
                        </Switch>
				    </section>			
			</div>
		)
	}
}

export default connect()(WikiPage)

