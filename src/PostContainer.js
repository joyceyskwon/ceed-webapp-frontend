import React, { Component } from 'react'
import Post from './Post'

export default class PostContainer extends Component {

  render() {
    return (
      <div>
        {this.props.posts.map(post => {
          return <Post
            key={post.id}
            post={post}
          />
        })}
      </div>
    )
  }
}