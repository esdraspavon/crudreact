import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Navbar from "./Navbar";
import Posts from "./Posts";

class Router extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then(resp => this.setState({ posts: resp.data }));
  }
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
                path={"/"}
                render={() => {
                  return <Posts posts={this.state.posts} />;
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
