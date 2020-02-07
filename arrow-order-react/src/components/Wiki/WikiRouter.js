import React, {Component} from 'react';
import {Switch, Route}    from 'react-router-dom';
import './WikiRouter.scss';

import Hat          from '../ComCom/Hat/Hat';
import BurgerButton from '../ComCom/Buttons/BurgerButton/BurgerButton';
import BackButton   from '../ComCom/Buttons/BackButton/BackButton';
import NavVidget    from '../ComCom/NavVidget/NavVidget';
import WikiCard     from './WikiCard/WikiCard.js';
import WikiMenu     from './WikiMenu/WikiMenu';

export default class WikiPage extends Component {
	render() {
		return(
			<div className = 'WikiRouter'>
				<Hat 
					left   = {<BackButton />}
					middle = {<div>Вики</div>}
					right  = {<BurgerButton />}/>
					<section className = 'Wiki'>
					    <NavVidget />
                        <Switch>

							<Route exact path = '/Wiki' component = {() => {
								return <WikiMenu/>
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

