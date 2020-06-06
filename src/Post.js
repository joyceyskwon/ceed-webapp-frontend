import React from 'react'

export default class Post extends React.Component {
  render() {
    const { post } = this.props
    return (
      <div>
        <h2>{post.title}</h2>
        <p>{post.date}</p>
        <p>{post.content}</p>
      </div>
    )
  }
}