import React,{Component} from 'react';
import {Switch, Route} from 'react-router';

import CakeDecor from './CakeDecor/CakeDecor';
import CakeDetails from './CakeOrderDetails/CakeOrderDetails';

export default class Constructor extends Component {

    render(){

        return(
            <>
                <Switch>
                    <Route exact path = '/Details/Decor' component = {CakeDecor}/>
                    <Route exact path = '/Details/Date' component = {CakeDetails}/>
                </Switch>
            </>		
        )
    }
}