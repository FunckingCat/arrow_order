import React,{Component} from 'react';
import './CakeConstructor.scss'; 
import {connect} from 'react-redux';

import {popUpActive, popUpSetContent} from '../../../../actions/popUpActions';

import PopUp from '../../../ComCom/PopUp/PopUp';

class CakeConstructor extends Component {

    handaleClick = (event) => {
        this.props.popUpSetContent(event.target.innerHTML)
        this.props.popUpActive(true);
    }

    render(){
                
        return(
            <>
                <div className = "CakeConstructor">
                    <button onClick = {this.handaleClick}>Бисквит</button>
                    <button onClick = {this.handaleClick}>Крем</button>
                    <button onClick = {this.handaleClick}>Начинка</button>
                </div>
                <PopUp/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isPopUpActive : state.popUp.active,
    }
}

const mapDispatchToProps = {
    popUpActive : popUpActive,
    popUpSetContent : popUpSetContent,
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeConstructor)
