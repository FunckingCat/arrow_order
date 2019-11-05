/* eslint-disable no-unused-vars */
import React from 'react';
import Login from './components/Login/Login';
import MainPage from './components/MainPage/MainPage';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import Error from './components/ErrorMassage/Error';
import CommingSoon from './components/CommigSoon/CommingSoon';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path = '/' component = {Login} /> 
        <Route exact path = '/MainPage' component = {MainPage} />
        <Route exact path = '/Menu' component = {BurgerMenu} />
        <Route exact path = '/Wiki' component = {CommingSoon} />
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
