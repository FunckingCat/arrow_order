import React,{Component} from 'react';
import './CakeConstructor.scss'; 
import {connect} from 'react-redux';

import {popUpActive} from '../../../../actions/popUpActions';

class CakeConstructor extends Component {

    handaleClick = () => {
        console.log(this.props.popUpActive);
        this.props.popUpActive(true);
    }

    render(){
        return(
            <div className = "CakeConstructor">
                <button onClick = {this.handaleClick}>Бисквит</button>
                <button>Крем</button>
                <button>Начинка</button>
            </div>
        )
    }
}

const mapDispatchToProps = {
    popUpActive : popUpActive,
}

export default connect(null, mapDispatchToProps)(CakeConstructor)
