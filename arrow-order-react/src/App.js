import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './css_reset.css';
import './App.scss';

import Login from './components/Login/Login';
import MainPage from './components/MainPage/MainPage';
import CommingSoon from './components/ComCom/CommigSoon/CommingSoon';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import Wiki from './components/Wiki/Wiki';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path = '/' component = {Login} /> 
        <Route exact path = '/MainPage' component = {MainPage} />
        <Route exact path = '/Menu' component = {BurgerMenu} />
        <Route path = '/Wiki' component = {Wiki}/>
        <Route exact path = '/FreeDates' component = {CommingSoon} />
        <Route exact path = '/Rules' component = {CommingSoon} />
        <Route exact path = '/Contacts' component = {CommingSoon} />
        <Route exact path = '/WorkWithUs' component = {CommingSoon} />
        <Route exact path = '/Products' component = {CommingSoon} />
      </div>
    </Router>
  );
}

export default App;
