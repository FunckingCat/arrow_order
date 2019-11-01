/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import './Basement.css';
import Insta from './Insta.svg';

export default class Basement extends Component {
    render() {
        return(
            <div className="basement">
                <h2>ArrowOrder</h2>
                <span>8 (985) 175-75-33</span>
                <a href="#"><img src={Insta} alt=""/></a>
                <span>© ArrowCook</span>
            </div>
        )
    }
}