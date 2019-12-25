import React,{Component} from 'react';
import './Constructor.scss'; 
import {Switch, Route} from 'react-router';

import Hat from '../ComCom/Hat/Hat';
import BurgerButton from '../ComCom/Hat/HatComponents/BurgerButton/BurgerButton';
import BackButton from '../ComCom/Hat/HatComponents/BackButton/BackButton';
import NavVidget from '../ComCom/NavVidget/NavVidget';
import CakeConstructor from './ConstructorComponents/CakeConstructor/CakeConstructor'


export default class Constructor extends Component {

 render(){
    return(
        <div className = 'WikiWrapper'>
				<Hat 
					left   = {<BackButton />}
					middle = {<div>Заказ</div>}
					right  = {<BurgerButton />}/>
                <section className = 'ConstructorPage'>
                    <NavVidget />
                    <Switch>
                        <Route exact path = '/Constructor/Cake/' component = {CakeConstructor} />
                    </Switch>
                </section>			
			</div>
    )
 }
}
