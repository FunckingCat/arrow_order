import React,{Component} from 'react';
import './Constructor.scss'; 
import {Switch, Route} from 'react-router';

import UniversalConstructor from './ConstructorComponents/UniversalConstructor/UniversalConstructor';
import PopUp           from '../ComCom/PopUp/PopUp';


export default class Constructor extends Component {

 render(){
    return(
        <section className = 'Constructor'>
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
    )
 }
}
