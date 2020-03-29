import React, {Component} from 'react';
import {Switch, Route}    from 'react-router-dom';
import './WikiRouter.scss';

import WikiCard     from './WikiCard/WikiCard.js';
import WikiMenu     from './WikiMenu/WikiMenu';

export default class WikiPage extends Component {
	render() {
		return(
			<section className = 'Wiki'>
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
		)
	}
}

