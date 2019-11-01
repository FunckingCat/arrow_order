/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import './BurgerButton.css';

export default class BurgerButton extends Component {
    render() {
        return(
           <a href="#">
               <div className="burger">
                   <div></div>
                   <div></div>
                   <div></div>
               </div>
           </a>
        )
    }
}