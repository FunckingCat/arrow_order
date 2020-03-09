import React,{Component} from 'react';
import {Switch, Route} from 'react-router';

import {connect}           from 'react-redux';

import CakeDecor from './CakeDecor/CakeDecor';
import CakeDetails from './CakeOrderDetails/CakeOrderDetails';

class Constructor extends Component {

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

const mapStateToProps = (state) => {
    return {
       
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Constructor)