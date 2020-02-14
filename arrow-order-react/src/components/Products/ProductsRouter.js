import React,{Component} from 'react';
import {Switch, Route}    from 'react-router-dom';
import './ProductsRouter.scss';  

import Products     from './Products/Products';

export default class ProductsRouter extends Component {

    render(){
        return(
            <section className="products">
                <Switch>
                    <Route exact path = '/Products/' component = {(info) => {
                        return <Products
                                    cat = {info.match.params.cat}/>
                    }}/>
                    <Route exact path = '/Products/:cat' component = {(info) => {
                        console.log(info);
                        return <Products
                                    cat = {info.match.params.cat}/>
                    }}/>
                </Switch>
            </section>
        )
    }
} 


