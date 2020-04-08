import React, {Component} from 'react';
import {connect}          from 'react-redux';
import './WikiCard.scss';

import Cross          from '../../ComCom/Buttons/Cross/Cross';
import Animator       from '../../ComCom/Animator/Animator';
import RequestService from '../../../servises/requestService';
import Bg             from '../../ComCom/Bg/Bg';

class WikCard extends Component {

	RequestService = new RequestService(this.props.domen);

	state = {
		titile : '',
		text   : '',
		image  : '',
	}

	componentDidMount() {
		this.update();
	}

	update = () => {
		//console.log(this.props.hashtag);
		this.RequestService.getWikiCard(this.props.hashtag)
		.then(res => {
			this.setState({
				title  : res.title,
				text   : res.text,
				image  : res.image,
			})
		})
	}

	renderText = (text) => {
		if (!text) return 
		let render = []
        let paragraphs = text.split('\n')
        for (let item of paragraphs){
            if (item.length < 4) continue
            render.push(
                <div className="paragraph" key = {item}>
                    <div className="tab"></div>
                    <div className="cont">{item}</div>
                </div>
            )
        }
        return render
	}

	render() {

		let text = this.renderText(this.state.text)

		return(
			<div className='WikiCard'>
				<Animator type = 'fade'><h1>{this.state.title}</h1></Animator>
				<Animator 
					type    = 'rise'
					timeout = '100'>
					<Bg src = {this.state.image}></Bg>
				</Animator>
				<Animator 
					type    = 'fade'
					timeout = '50'>
					<div className = 'content'>{text}</div>
					<Cross/>
				</Animator>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		domen : state.domen
	}
}

export default connect(mapStateToProps)(WikCard)