import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Navbar from "./Navbar";

class Router extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div className="row justify-content-center">
            <Header />
            <Navbar />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
