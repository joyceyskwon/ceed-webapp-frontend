import React from 'react';

const Signup = props => {
  return (
    <div>
      <form
        onSubmit={props.handleSignupSubmit}
      >
        <input 
          placeholder="Full Name"
          name="newUserName"
          type="text"
          onChange={props.handleSignupInputs}
        />
        <input 
          placeholder="Email"
          name="newUserEmail"
          type="text"
          onChange={props.handleSignupInputs}
        />
        <input 
          placeholder="Password"
          name="newUserPassword"
          type="password"
          onChange={props.handleSignupInputs}
        />
        <input 
          type="Submit"
        />
      </form>
    </div>
  )
}

export default Signup