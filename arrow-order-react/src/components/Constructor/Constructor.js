import React,{Component} from 'react';
import {Switch, Route} from 'react-router';

import {connect}      from 'react-redux';
import {setOrderType} from '../../actions/orderActions'; 

import UniversalConstructor from './ConstructorComponents/UniversalConstructor/UniversalConstructor';


class Constructor extends Component {

    setOrderType = (orderType) => {
        this.props.setOrderType(orderType);
    }

    render(){

        return(
            <>
                <Switch>
                    <Route exact path = '/Constructor/:type/' component = {(info) => {
                        this.setOrderType(info.match.params.type);
                        return(
                            <UniversalConstructor/>
                        )
                    }} />
                </Switch>
            </>		
        )
    }
}

const mapDispatchToProps = {
    setOrderType : setOrderType
}

export default connect(null, mapDispatchToProps)(Constructor)
