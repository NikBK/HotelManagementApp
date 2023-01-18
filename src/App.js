import './App.css';
import React, { useState, useEffect } from "react";
import "firebase/auth";
import firebase from "firebase/app";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import hostel from "./components/hostel/index";
import { GirlshostelNumber, BoyshostelNumber } from './components/hostelNumber/index';
import { hostelFloor } from './components/hostelFloor/index';
import { bookingCompleted } from './components/bookingCompleted/index';
import { Login } from './components/Login/login';
import Home from './components/home/index';

function App() {
  const [loggedIn, setLoggedIn] = useState(null);
  const [showPopUp, setShowPopUp] = useState(true);

  useEffect(() => {
    if (!firebase.apps.length) {
      var firebaseConfig = {
        apiKey: "AIzaSyC4K7SlEvr4PeqQz1_RJwhEsRaY4myuqbE",
        authDomain: "hostelmanagementapp-ba266.firebaseapp.com",
        projectId: "hostelmanagementapp-ba266",
        storageBucket: "hostelmanagementapp-ba266.appspot.com",
        messagingSenderId: "1029044038133",
        appId: "1:1029044038133:web:832855eec735c3df85d8bc",
        measurementId: "G-ESX12M3B12"
      };
      firebase.initializeApp(firebaseConfig);
      // firebase.analytics();
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          setLoggedIn(true)
        } else {
          setLoggedIn(false)
        }
      })
    }
  }, []);

  if (loggedIn) {
    return (
      <Router>
        <Switch>
          <Route exact path="/hostel" component={hostel}></Route>
          <Route path="/selectGirlsHostel" component={GirlshostelNumber}></Route>
          <Route path="/selectBoysHostel" component={BoyshostelNumber}></Route>
          <Route path="/selectFloor" component={hostelFloor}></Route>
          <Route path="/BookingCompleted" component={bookingCompleted}></Route>
        </Switch>
      </Router>
    );
  }
  return (
    <div className='App'>
      {
        showPopUp
        &&
        <div className='netlify-popup-msg'>
          <h2>Note</h2>
          <div>
            <div>This application works fine in local but has issues with Netlify hosting.</div>
            <div>Hence some features might not work as expected.</div>
          </div>
          <button className='popup-btn' onClick={() => setShowPopUp(false)}>OK</button>
        </div>
      }
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path='/login' component={Login}></Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;

