import React from 'react';
import Login from './Login';
import Signup from './Signup';

const Auth = props => {
  return (
    <div>
      <Login 
        handleLoginInputs={props.handleLoginInputs}
        handleLoginSubmit={props.handleLoginSubmit}
      />
      <p>New to Ceed?</p>
      <Signup 
        handleSignupInputs={props.handleSignupInputs}
        handleSignupSubmit={props.handleSignupSubmit}
      />
    </div>
  )
}

export default Auth