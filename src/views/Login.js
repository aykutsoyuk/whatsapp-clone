import React from "react";
import "../styles/Login.styles.css";
import { provider, db } from "../db/index.js";
import firebase from "firebase";
import { useHistory } from "react-router-dom"

const Login = (props) => {
  let history = useHistory()
  const setUsersOnDB = (user) => {
    db.collection("users").doc(user.id).set(user);
  };
  const loginWithGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const user = {
          id: result.user.uid,
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        };
        props.setUser(user);
        setUsersOnDB(user);
        history.push("/chats")
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="main">
      <div className="login-main">
        <h1 className="login-header">Login</h1>
        <button className="login-button" onClick={loginWithGoogle}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
