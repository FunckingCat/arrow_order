import React,{Component} from 'react';
import {Switch, Route} from 'react-router';

import {connect}           from 'react-redux';
import {setOrderType}      from '../../actions/orderActions';
import {resetOrder}        from '../../actions/orderActions';
import {reset_colors}      from '../../actions/assemblyColorsActions';

import UniversalConstructor from './ConstructorComponents/UniversalConstructor/UniversalConstructor';

class Constructor extends Component {

    reset = () => {
        this.props.resetOrder();
        this.props.reset_colors();
    }

    setOrderType = (orderType) => {
        if(this.props.oldOrderType !== orderType) this.reset();
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

const mapStateToProps = (state) => {
    return {
        oldOrderType : state.orderDetails.type,
    }
}

const mapDispatchToProps = {
    setOrderType,
    resetOrder,
    reset_colors,
}

export default connect(mapStateToProps, mapDispatchToProps)(Constructor)
