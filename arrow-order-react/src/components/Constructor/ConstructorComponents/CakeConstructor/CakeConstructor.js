import React,{Component} from 'react';
import './CakeConstructor.scss'; 
import {connect} from 'react-redux';

import {popUpActive} from '../../../../actions/popUpActions';

import PopUp from '../../../ComCom/PopUp/PopUp';

class CakeConstructor extends Component {

    handaleClick = () => {
        this.props.popUpActive(true);
    }

    render(){
                
        return(
            <>
                <div className = "CakeConstructor">
                    <button onClick = {this.handaleClick}>Бисквит</button>
                    <button>Крем</button>
                    <button>Начинка</button>
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
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeConstructor)
