import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Navbar from "./Navbar";
import Posts from "./Posts";
import SinglePost from "./SinglePost";
import Form from "./Form";

class Router extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then(resp => this.setState({ posts: resp.data }));
  };

  deletePost = id => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(resp => {
        if (resp.status === 200) {
          const posts = [...this.state.posts];
          let result = posts.filter(post => post.id !== id);
          this.setState({ posts: result });
        }
      });
  };

  createPost = post => {
    console.log(post);
  };

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div className="row justify-content-center">
            <Header />
            <Navbar />
            <Switch>
              <Route
                exact
                path="/"
                render={() => {
                  return (
                    <Posts
                      posts={this.state.posts}
                      deletePost={this.deletePost}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/posts/:postId"
                render={props => {
                  let idPost = props.match.params.postId;
                  const posts = this.state.posts;

                  let filtro;

                  filtro = posts.filter(post => post.id === Number(idPost));
                  return <SinglePost post={filtro[0]} />;
                }}
              />
              <Route
                exact
                path="/crear"
                render={() => {
                  return <Form createPost={this.createPost} />;
                }}
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
