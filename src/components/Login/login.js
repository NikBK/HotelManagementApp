import React from "react";
import "../../../src/App.css";
import firebase from "firebase/app";
import "firebase/auth";
import { StyledFirebaseAuth } from 'react-firebaseui';

export const Login = () => {
    const uiConfig = {
        signInFlow: 'popup',
        signInSuccessUrl: '/hostel',
        signInOptions: [
          {
              provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
              requireDisplayName: true
          },
          {
              provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
          },
          {
              provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID
          }
        ]
    }
    return (
        <div className='login-container'>
              <h2>Login to use booking app</h2>
              <br />
              <StyledFirebaseAuth 
                  uiConfig={uiConfig}
                  firebaseAuth={firebase.auth()}
              />
          </div>
      )
  }