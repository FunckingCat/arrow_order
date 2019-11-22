/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import './BurgerButton.scss';
import {Link} from "react-router-dom";

export default class BurgerButton extends Component {
    render() {
        return(
           <Link to ="/Menu">
               <div className="burger">
                   <div></div>
                   <div></div>
                   <div></div>
               </div>
           </Link>
        )
    }
}