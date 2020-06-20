import React from 'react';
import Auth from './Auth';

const Navigation = props => {
  return (
    <div>
      <Auth 
        handleSignupInputs={props.handleSignupInputs}
        handleSignupSubmit={props.handleSignupSubmit}
        handleLoginInputs={props.handleLoginInputs}
        handleLoginSubmit={props.handleLoginSubmit}
      />
    </div>
  )
}

export default Navigation