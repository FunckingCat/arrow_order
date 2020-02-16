import React,{Component} from 'react';
import './Constructor.scss'; 
import {Switch, Route} from 'react-router';

import Hat             from '../ComCom/HatAndNav/Hat/Hat';
import BurgerButton    from '../ComCom/Buttons/BurgerButton/BurgerButton';
import BackButton      from '../ComCom/Buttons/BackButton/BackButton';
import NavVidget       from '../ComCom/HatAndNav/NavVidget/NavVidget';
import UniversalConstructor from './ConstructorComponents/UniversalConstructor/UniversalConstructor';
import PopUp           from '../ComCom/PopUp/PopUp';


export default class Constructor extends Component {

 render(){

    let defConType = (type) => {
        switch (type){
            case 'cup':
            case 'CupCake':
            case 'cupCake':
            case 'cupcake':
            case 'Cupcake':
                return 'cup'
            case 'cake':
            case 'Cake':
            case 'biscuitcake':
            case 'biscuit':
                return 'biscuit'
            case 'honey':
            case 'honeyCake':
            case 'HoneyCake':
            case 'honeycake':
            case 'digitCake':
            case 'digitcake':
            case 'Digitcake':
            case 'DigitCake':
                return 'honey'
            default:
                return 'Not defined'
        }
    }

    return(
        <section className = 'Constructor'>
            <Hat 
                left   = {<BackButton />}
                middle = {<div>Заказ</div>}
                right  = {<BurgerButton />}/>	
            <NavVidget />
            <Switch>
                <Route exact path = '/Constructor/:type/' component = {(info) => {
                    return(
                        <>
                            <UniversalConstructor
                                type = {defConType(info.match.params.type)}/>
                            <PopUp
                                type = {defConType(info.match.params.type)}/>	
                        </>
                    )
                }} />
            </Switch>
        </section>	
    )
 }
}
