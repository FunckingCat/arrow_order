/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {initTransfer} from '../../../../actions/historyActions';

import './BurgerButton.scss';
import {Link} from "react-router-dom";

class BurgerButton extends Component {

    handaleClick = (event) => {
        this.props.transfer('Меню', '/Menu')
    }

    render() {
        return(
          <div className='outBurger'>
            <Link to ="/Menu" onClick = {this.handaleClick}>
               <div className="burger">
                   <div></div>
                   <div></div>
                   <div></div>
               </div>
           </Link>
          </div>
        )
    }
}

const mapDispatchToProps = {
    transfer : initTransfer
}

export default connect(null, mapDispatchToProps)(BurgerButton)
