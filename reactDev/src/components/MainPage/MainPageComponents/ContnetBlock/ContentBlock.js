/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import './ContentBlock.scss'

export default class ContentBlock extends Component {

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
        let header = '';
        if(this.props.header){
            header = <h2>{this.props.header}</h2>
        }

        let text = this.renderText(this.props.text)

        return(
            <div className="content">
                {header}
                <div className='text'>{text}</div>
            </div>
        )
    }
}