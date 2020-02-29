import React,{Component} from 'react';
import './Constructor.scss'; 
import {Switch, Route} from 'react-router';

import {connect}      from 'react-redux';
import {setOrderType} from '../../actions/orderActions'; 

import Hat             from '../ComCom/HatAndNav/Hat/Hat';
import BurgerButton    from '../ComCom/Buttons/BurgerButton/BurgerButton';
import BackButton      from '../ComCom/Buttons/BackButton/BackButton';
import NavVidget       from '../ComCom/HatAndNav/NavVidget/NavVidget';
import UniversalConstructor from './ConstructorComponents/UniversalConstructor/UniversalConstructor';
import PopUp           from '../ComCom/PopUp/PopUp';


class Constructor extends Component {

    setOrderType = (orderType) => {
        this.props.setOrderType(orderType);
    }

    render(){

        return(
            <section className = 'Constructor'>
                <Hat 
                    left   = {<BackButton />}
                    middle = {<div>Заказ</div>}
                    right  = {<BurgerButton />}/>	
                <NavVidget />
                <Switch>
                    <Route exact path = '/Constructor/:type/' component = {(info) => {
                        this.setOrderType(info.match.params.type);
                        return(
                            <>
                                <UniversalConstructor/>
                                <PopUp/>	
                            </>
                        )
                    }} />
                </Switch>
            </section>	
        )
    }
}

const mapDispatchToProps = {
    setOrderType : setOrderType
}

export default connect(null, mapDispatchToProps)(Constructor)
