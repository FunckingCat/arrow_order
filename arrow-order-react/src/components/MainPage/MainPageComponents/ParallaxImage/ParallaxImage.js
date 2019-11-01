/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import './ParallaxImage.css'

export default class ParallaxImage extends Component {
    render() {
        return(
            <img className="thumbnail" src={this.props.src} alt="ArrowOrder Products"/>
        )
    }
}