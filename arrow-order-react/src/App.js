import React from 'react';
import './css_reset.css';
import './App.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Hat         from './components/ComCom/HatAndNav/HatAndNav';
import Login       from './components/Login/Login';
import MainPage    from './components/MainPage/MainPage';
import CommingSoon from './components/ComCom/CommigSoon/CommingSoon';
import BurgerMenu  from './components/BurgerMenu/BurgerMenu';
import WikiRouter  from './components/Wiki/WikiRouter';
import Products    from './components/Products/ProductsRouter';
import Constructor from './components/Constructor/Constructor';
import DatePicker  from './components/ComCom/DatePicker/DatePicker';

function App() {

  let toHat = (title,component) => <Hat title = {title}>{component}</Hat>

  return (
    <Router>
      <div className="App">
        <Route exact path = '/' component = {Login} /> 
        <Route exact path = '/MainPage' component = {MainPage} />
        <Route exact path = '/Menu' component = {BurgerMenu} />
        <Route path = '/Wiki' component = {() => toHat('Вики', <WikiRouter/>)}/>
        <Route path = '/Constructor' component = {Constructor}/>
        <Route exact path = '/FreeDates' component = {() => toHat('Свободные даты', <DatePicker/>)} />
        <Route exact path = '/Rules' component = {CommingSoon} />
        <Route exact path = '/Contacts' component = {CommingSoon} />
        <Route exact path = '/WorkWithUs' component = {CommingSoon} />
        <Route path = '/Products' component = {() => toHat('Продукция', <Products/>)} />
      </div>
    </Router>
  );
}

export default App;
