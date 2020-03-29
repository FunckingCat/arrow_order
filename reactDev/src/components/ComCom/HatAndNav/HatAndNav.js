import React,{Component} from 'react';
import './HatAndNav.scss'; 

import Hat             from './Hat/Hat';
import BurgerButton    from '../Buttons/BurgerButton/BurgerButton';
import BackButton      from '../Buttons/BackButton/BackButton';
import NavVidget       from './NavVidget/NavVidget';

export default class HatAndNav extends Component {

    render(){
        return(
            <>
                <Hat 
                            left   = {<BackButton />}
                            middle = {<div>{this.props.title}</div>}
                            right  = {<BurgerButton />}/>	
                <NavVidget />
                {this.props.children}
            </>
        )
    }
}
