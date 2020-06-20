import React from 'react';
import './App.css';
import Auth from './components/Auth';
import Navigation from './components/Navigation';
import PostContainer from './PostContainer';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  state = {
    posts: [],
    newUserName: '',
    newUserEmail: '',
    newUserPassword: '',
    loginEmail: '',
    loginPassword: '',
    currentUser: null,
  }

  componentDidMount() {
    this.fetchPosts()
  }

  fetchPosts = () => {
    fetch('http://localhost:3000/api/v1/posts')
    .then(r => r.json())
    .then(posts => {
      this.setState({
        posts
      })
    })
  }

  handleSignupInputs = e => {
    console.log('New User Input ', e.target.name, ': ', e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSignupSubmit = e => {
    e.preventDefault()
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user: {
          name: this.state.newUserName,
          email: this.state.newUserEmail,
          password: this.state.newUserPassword
        }
      })
    })
    .then(r => r.json())
    .then(newUser => {
      console.log(newUser, ': NEW USER AFTER FETCH')
      this.setState({
        currentUser: newUser || null
      })
    })
  }

  handleLoginInputs = e => {
    console.log('Login User Input ', e.target.name, ': ', e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLoginSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.loginEmail,
        password: this.state.loginPassword
      })
    })
    .then(r => r.json())
    .then(user => console.log(user))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation 
            handleSignupInputs={this.handleSignupInputs}
            handleSignupSubmit={this.handleSignupSubmit}
            handleLoginInputs={this.handleLoginInputs}
            handleLoginSubmit={this.handleLoginSubmit}
          />
          <Switch>
            <Route 
              path='/'
              render={() => <PostContainer
                posts={this.state.posts}
              />}
            />
            <Route 
              path='/login'
              render={() => <Login}
            />
          </Switch>
        </header>
      </div>
    )
  }
}

export default App;
