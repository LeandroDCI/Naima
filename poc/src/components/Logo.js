import React, { Component } from "react";
import logo from "../styles/logo.svg";
export default class Logo extends Component {
  render() {
    return (
      <React.Fragment>
        <img alt="logo" src={logo} className="App-logo" />
      </React.Fragment>
    );
  }
}
