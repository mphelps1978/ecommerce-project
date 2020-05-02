import React, {useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/homepage/HomePage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {  auth, createUserProfileDocument } from './firebase/firebase.utils'
import './firebase/firebase.utils'

import './App.css'




const App = () => {

  const [activeUser, setActiveUser] = useState({
    currentUser: null,
    displayName: ''
  });



  function onAuthStateChange(callback) {
    return auth.onAuthStateChanged(async user => {
      if (user) {
          callback({
          currentUser: user,
          displayName: user.displayName
        },
        createUserProfileDocument(user),
        // console.log('user: ', user)
        )
      }
      else {
        callback({
          currentUser: null,
          displayName: ''
        });
      }
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChange(setActiveUser);
    return () => {

      unsubscribe();

    };
  }, []);


  return (
    <div className = 'container'>
    <Header currentUser = {activeUser.currentUser} name = {activeUser.displayName} />
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
