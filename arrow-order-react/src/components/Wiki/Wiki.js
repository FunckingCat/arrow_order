import React, {Component} from 'react';
import {connect}          from 'react-redux';
import {Switch, Route}    from 'react-router-dom';
import './Wiki.scss';

import Hat          from '../ComCom/Hat/Hat';
import BurgerButton from '../ComCom/Buttons/BurgerButton/BurgerButton';
import BackButton   from '../ComCom/Buttons/BackButton/BackButton';
import NavVidget    from '../ComCom/NavVidget/NavVidget';
import WikiCard     from './WikiCard/WikiCard.js';
import WikiMenu     from './WikiMenu/WikiMenu';

class WikiPage extends Component {
	render() {
		return(
			<div className = 'WikiWrapper'>
				<Hat 
					left   = {<BackButton />}
					middle = {<div>Вики</div>}
					right  = {<BurgerButton />}/>
					<section className = 'WikiPage'>
					    <NavVidget />
                        <Switch>

							<Route exact path = '/Wiki' component = {() => {
								return <WikiMenu type = {'Вики'}/>
								}}/>


							<Route exact path = '/Wiki/:id' component = {
								(info) => {
									return <WikiMenu
									id   = {info.match.params.id}/>
								}}/>
								
							<Route exact path = '/Wiki/Card/:hashtag' component = {
								(info) => {
									return <WikiCard
										hashtag = {info.match.params.hashtag}/>
								}
							}/>
                        </Switch>
				    </section>			
			</div>
		)
	}
}

export default connect()(WikiPage)

