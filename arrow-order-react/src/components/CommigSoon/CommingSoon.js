import React, {Component} from 'react';
import {connect} from 'react-redux';
import {back} from '../../actions/historyActions';
import './CommingSoon.scss';
import Robot from './Robot.svg';
import backIcon from './back.svg';

import Animator from '../Animator/Animator';


class CommingSoon extends Component {

    handaleClick = (event) => {
        this.props.back();
        window.history.back();
    }

    render() {
        return(
            <Animator type = 'rise'>
                <div className="CommingSoon">
                    <img src={Robot} alt=""/>
                    <h2>Пока здесь нет страницы</h2>
                    <button onClick={this.handaleClick}> <img src={backIcon} alt=""/> Назад</button>
                </div>
            </Animator>
        )
    }
}

const mapDispatchToProps = {
    back : back
}

export default connect (null, mapDispatchToProps)(CommingSoon)