import React from 'react';
import './App.css';
import Auth from './Auth';
import PostContainer from './PostContainer';

class App extends React.Component {
  state = {
    posts: [],
    newUserName: '',
    newUserEmail: '',
    newUserPassword: '',
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Auth 
            handleSignupInputs={this.handleSignupInputs}
            handleSignupSubmit={this.handleSignupSubmit}
          />
          <PostContainer 
            posts={this.state.posts}
          />
        </header>
      </div>
    )
  }
}

export default App;
