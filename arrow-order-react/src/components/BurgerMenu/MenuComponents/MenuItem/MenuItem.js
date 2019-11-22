/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {initTransfer} from '../../../../actions/historyActions';
import './MenuItem.scss';
import {Link} from "react-router-dom";

class MenuItem extends Component {
    
    handaleClick = (event) => {
        this.props.transfer(this.props.text, this.props.href)
    }

    render(){
        return(
            <Link to ={this.props.href} onClick = {this.handaleClick}>
                <div className="menuitem">
                    {this.props.text}
                </div>
            </Link>            
        )
    }
}

const mapDispatchToProps = {
    transfer : initTransfer
}

export default connect(null, mapDispatchToProps)(MenuItem)