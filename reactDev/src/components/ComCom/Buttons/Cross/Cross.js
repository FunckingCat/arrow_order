/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Cross.scss';
import {Link} from "react-router-dom";
import {back} from '../../../../actions/historyActions'

class Cross extends Component {

    handaleClick = (event) => {
        this.props.goBack()
    }

    render(){
        return(
            <div className="crossWrapper">
                <Link to ={this.props.href} className = 'exit' onClick = {this.handaleClick}>
                    <div className = 'cross'>
                        <div className="first"></div>
                        <div className="second"></div>
                    </div>
                </Link>   
            </div>         
        )
    }
}

const mapStateToProps = (state) => {
    return{
        href : state.history.backLink
    }
}

const mapDispatchToProps = {
    goBack : back
}

export default connect(mapStateToProps, mapDispatchToProps)(Cross)