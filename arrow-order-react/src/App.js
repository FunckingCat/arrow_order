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
      </div>
    </Router>
  );
}

export default App;
