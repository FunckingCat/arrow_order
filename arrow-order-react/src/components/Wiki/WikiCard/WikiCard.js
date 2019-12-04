import React, {Component} from 'react';
import {connect} from 'react-redux';
import './WikiCard.scss';

import Cross from '../../BurgerMenu/MenuComponents/Cross/Cross';
import Animator from '../../ComCom/Animator/Animator';

class WikCard extends Component {
	render() {
		return(
			<div className='WikiCard'>
				<Animator type = 'fade'><h1>Ванильный бисквит</h1></Animator>
				<Animator 
					type = 'rise'
					timeout = '100'>
					<img src='https://zira.uz/wp-content/uploads/2019/04/biskvit-na-kipyatke2.jpg' alt="wikiPhoto"/>
				</Animator>
				<Animator 
					type = 'fade'
					timeout = '50'>
					<div className = 'content'> Разнообразный и богатый опыт говорит нам, что сложившаяся структура организации играет важную роль в формировании поэтапного и последовательного развития общества. Прежде всего, повышение уровня гражбованность глубокомысленных рассуждений. Значимость этих проблем настолько очевидна, что глубокий уровень погружения не даёт нам иного выбора, кроме определения дальнейших направлений развития.</div>
					<Cross/>
				</Animator>
			</div>
		)
	}
}

export default connect()(WikCard)