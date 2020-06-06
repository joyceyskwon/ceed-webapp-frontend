import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostContainer from './PostContainer'

class App extends React.Component {
  state = {
    posts: [] 
  }

  componentDidMount() {
    this.fetchUsers()
  }

  fetchUsers = () => {
    fetch('http://localhost:3000/api/v1/posts')
    .then(r => r.json())
    .then(posts => {
      this.setState({
        posts
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <PostContainer 
            posts={this.state.posts}
          />
        </header>
      </div>
    )
  }
}

export default App;
