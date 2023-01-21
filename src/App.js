import './App.css';
import React, { useState, useEffect } from "react";
import "firebase/auth";
import firebase from "firebase/app";

import { Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom";
import hostel from "./components/hostel/index";
import { GirlshostelNumber, BoyshostelNumber } from './components/hostelNumber/index';
import { hostelFloor } from './components/hostelFloor/index';
import { BookingCompleted } from './components/bookingCompleted/index';
import { Login } from './components/Login/login';
import Home from './components/home/index';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
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
          setLoggedIn(true);
          localStorage.setItem('user', true);
        } else {
          setLoggedIn(false);
          localStorage.removeItem('user');
        }
      })
    }
  }, []);

  useEffect(() => {
    setLoggedIn(JSON.parse(localStorage.getItem('user')) ? true : false);
  }, [])

  if (loggedIn) {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/hostel" />
          </Route>
          <Route path="/hostel" component={hostel}></Route>
          <Route path="/selectGirlsHostel" component={GirlshostelNumber}></Route>
          <Route path="/selectBoysHostel" component={BoyshostelNumber}></Route>
          <Route path="/selectFloor" component={hostelFloor}></Route>
          <Route path="/BookingCompleted">
            <BookingCompleted setLoggedIn={setLoggedIn} />
          </Route>
        </Switch>
      </Router>
    );
  }
  return (
    <div className='App'>
      <div className='netlify-popup-msg'>
        <h3>Note</h3>
        <div>
          <div>Netlify might have issues</div>
        </div>
      </div>
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

