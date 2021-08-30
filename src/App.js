import './App.css';
import React, { useState, useEffect } from "react";
import "firebase/auth";
import firebase from "firebase/app";

import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import hostel from "./components/hostel";
import { GirlshostelNumber, BoyshostelNumber } from './components/hostelNumber';
import { hostelFloor } from './components/hostelFloor';
import { BookingCompleted } from './components/bookingCompleted';
import { Login } from './components/Login/login';
import Home from './components/home';

function App(){
  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() =>{
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
      firebase.analytics();
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      firebase.auth().onAuthStateChanged((user) => {
          if(user) {
              setLoggedIn(true)
          } else {
              setLoggedIn(false)
          }
      })
    }
  }, []);

  if (loggedIn) {
    if(localStorage.getItem('roomNumber') != null){
      console.log('You have already booked a room');
      return <BookingCompleted />
    }
    // console.log('path');
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/hostel" component={hostel}>{console.log('hostel')}</Route>
          <Route path="/selectGirlsHostel" component={GirlshostelNumber}></Route>
          <Route path="/selectBoysHostel" component={BoyshostelNumber}></Route>
          <Route path="/selectFloor" component={hostelFloor}></Route>
          <Route path="/BookingCompleted" component={BookingCompleted}></Route>
        </Switch>
      </Router>
    );
  }
  console.log('not logged in');
  return (
    <div className='App'>
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

