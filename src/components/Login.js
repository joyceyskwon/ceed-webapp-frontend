import React from 'react';

const Login = props => {
  return (
    <div>
      <form
        onSubmit={props.handleLoginSubmit}
      >
        <input 
          placeholder="Email"
          name="loginEmail"
          type="text"
          onChange={props.handleLoginInputs}
        />
        <input 
          placeholder="Password"
          name="loginPassword"
          type="password"
          onChange={props.handleLoginInputs}
        />
        <input
          type="Submit"
        />
      </form>
    </div>
  )
}

export default Login