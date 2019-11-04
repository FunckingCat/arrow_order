/* eslint-disable no-unused-vars */
import React from 'react';
import Login from './components/Login/Login';
import MainPage from './components/MainPage/MainPage';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import Error from './components/ErrorMassage/Error';
import CommingSoon from './components/CommigSoon/CommingSoon';


function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <MainPage /> */}
      {/* <BurgerMenu /> */}
      <CommingSoon />
    </div>
  );
}

export default App;
