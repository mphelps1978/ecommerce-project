import React, {useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/homepage/HomePage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {  auth } from './firebase/firebase.utils'

import './App.css'




const App = () => {

  const [user, setUser] = useState({ cuurentUser: null });

  function onAuthStateChange(callback) {
    return auth.onAuthStateChanged(user => {
      if (user) {
        callback({currentUser: user});
      } else {
        callback({currentUser: null});
      }
    });
  }

    useEffect(() => {
      const unsubscribe = onAuthStateChange(setUser);
      return () => {
        unsubscribe();

      };
    }, []);

    // console.log(user);

  return (
    <div className = 'container'>
    <Header/>
      <Switch>
        <Route exact path = '/' component = {HomePage} />
        <Route path = '/shop' component = {ShopPage} />
        <Route path = '/signin' component = {SignInAndSignUp} />
      </Switch>
    </div>
  );
// }
}

export default App
