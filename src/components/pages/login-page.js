import React from "react";
import {Redirect} from 'react-router-dom';

const LoginPage = ({ isLoggedIn, onLogin }) => {


	if ( isLoggedIn ) 
		return <Redirect to="/" />

  return (
    <div className="jumbotron">
      <h2>Login to see the secret page!</h2>
      <button onClick={onLogin} className="btn btn-primary">
        Login
      </button>
    </div>
  );
};

export default LoginPage;
