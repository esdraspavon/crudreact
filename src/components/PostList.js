import React, { Component } from "react";
import Post from "./Post";
class PostList extends Component {
  showPosts = () => {
    const posts = this.props.posts;
    if (posts.length === 0) return null;
    return (
      <React.Fragment>
        {Object.keys(posts).map(post => (
          <Post
            key={post}
            data={this.props.posts[post]}
            deletePost={this.props.deletePost}
          />
        ))}
      </React.Fragment>
    );
  };

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Titulo</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>{this.showPosts()}</tbody>
      </table>
    );
  }
}

export default PostList;
