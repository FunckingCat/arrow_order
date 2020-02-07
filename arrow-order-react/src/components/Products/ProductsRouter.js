import React,{Component} from 'react';
import {Switch, Route}    from 'react-router-dom';
import './ProductsRouter.scss';  

import Hat from '../ComCom/Hat/Hat';
import BurgerButton from '../ComCom/Buttons/BurgerButton/BurgerButton';
import BackButton   from '../ComCom/Buttons/BackButton/BackButton';
import NavVidget    from '../ComCom/NavVidget/NavVidget';
import Products     from './Products/Products';

export default class ProductsRouter extends Component {

    render(){
        return(
            <>
            <Hat
                left   = {<BackButton />}
                middle = {<div>Продукция</div>}
                right  = {<BurgerButton />}/>
                <section className="products">
                    <NavVidget />
                    <Switch>
                        <Route exact path = '/Products/' component = {(info) => {
                            console.log(info);
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
            </>
        )
    }
} 


