import React, {Component} from 'react';
import './css_reset.css';
import './App.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Hat           from './components/ComCom/HatAndNav/HatAndNav';
import Login         from './components/Login/Login';
import MainPage      from './components/MainPage/MainPage';
//import CommingSoon   from './components/ComCom/CommigSoon/CommingSoon';
import BurgerMenu    from './components/BurgerMenu/BurgerMenu';
import WikiRouter    from './components/Wiki/WikiRouter';
import Products      from './components/Products/ProductsRouter';
import Constructor   from './components/Constructor/Constructor';
import AvalDates     from './components/AvalibleDates/AvalibleDates';
import DetailsRouter from  './components/OrderDetails/DetailsRouter';
import ProductCard   from './components/ProductCard/ProductCard';
import OrderOutput   from './components/OrderOutput/OrderOutput';
import OrderPush     from './components/OrderPush/OrderPush';

import BugOverlay from './components/BugOverlay/BugOverlay';

export default class App extends Component{

  render() {

    let toHat = (title,component) => <Hat title = {title}>{component}</Hat>

    return (
      <>
      <Router>
        <div className="App">
          <Route exact path = '/'                  component = {Login} /> 
          <Route exact path = '/MainPage'          component = {MainPage} />
          <Route exact path = '/Menu'              component = {BurgerMenu} />
          <Route       path = '/Wiki'              component = {()     => toHat('Вики', <WikiRouter/>)}/>
          <Route       path = '/Constructor'       component = {()     => toHat('Заказ', <Constructor/>)}/>
          <Route exact path = '/FreeDates'         component = {()     => toHat('Свободные даты', <AvalDates/>)} />
          <Route       path = '/Products'          component = {()     => toHat('Продукция', <Products/>)} />
          <Route exact path = '/ProductCard/:prod' component = {(info) => toHat('Заказ', <ProductCard prod = {info.match.params.prod}/>)}/>
          <Route       path = '/Details/'          component = {()     => toHat('Детали заказа', <DetailsRouter/>)} />
          <Route exact path = '/OrderOutput/'      component = {()     => toHat('Подтверждение', <OrderOutput/>)}/>
          <Route exact path = '/OrderPush/'        component = {OrderPush}/>
          {/* <Route exact path = '/Contacts'          component = {()     => toHat('Контакты', <CommingSoon/>)} />
          <Route exact path = '/WorkWithUs'        component = {()     => toHat('Сотрудничество', <CommingSoon/>)} /> */}
          <BugOverlay/>
        </div>
      </Router>
      </>
    );
  }  
}
