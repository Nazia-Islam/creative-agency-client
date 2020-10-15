import React, { useContext } from 'react';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/home" } };

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
          const { displayName, email } = result.user;
          const signedInUser = { name: displayName, email }
          setLoggedInUser(signedInUser);
          storeAuthToken();
          //console.log(email);
          const data = {em:email}
          fetch('http://localhost:5000/addUser', {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
        }).catch(function (error) {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
      }
    
    const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
        }).catch(function (error) {
        // Handle error
        });
    }


    return (
        <div>
            <div className="login-page mt-5 d-flex flex-column justify-content-center align-items-center">
                <img style={{width:"150px"}} src={require("../../logos/logo.png")} alt=""/>
                <div className="login-box shadow mb-5 bg-white rounded">
                    <h4>Login with</h4>
                    <button className="py-1 btn-brand my-4" onClick={handleGoogleSignIn}>Google Sign in</button>
                    <p><small>don't have an account? <a data-toggle="tooltip" data-placement="bottom" title="create account with google" href="/login" style={{color:"3F90FC"}}>create an account</a ></small></p>
                </div>
            </div>
        </div>
    );
};

export default Login;