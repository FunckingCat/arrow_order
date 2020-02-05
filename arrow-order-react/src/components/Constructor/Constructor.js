import React,{Component} from 'react';
import './Constructor.scss'; 
import {Switch, Route} from 'react-router';

import Hat             from '../ComCom/Hat/Hat';
import BurgerButton    from '../ComCom/Buttons/BurgerButton/BurgerButton';
import BackButton      from '../ComCom/Buttons/BackButton/BackButton';
import NavVidget       from '../ComCom/NavVidget/NavVidget';
import UniversalConstructor from './ConstructorComponents/UniversalConstructor/UniversalConstructor';
import PopUp           from '../ComCom/PopUp/PopUp';


export default class Constructor extends Component {

 render(){
    return(
        <>
            <section className = 'Constructor'>
                <Hat 
                        left   = {<BackButton />}
                        middle = {<div>Заказ</div>}
                        right  = {<BurgerButton />}/>	
                <NavVidget />
                <Switch>
                    <Route exact path = '/Constructor/Cake/' component = {() => {
                        return(
                            <>
                                <UniversalConstructor/>
                                <PopUp/>	
                            </>
                        )
                    }} />
                </Switch>
            </section>	
		</>
    )
 }
}
