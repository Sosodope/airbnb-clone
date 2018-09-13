import React, { Component } from "react";
import Header from "./components/Header/Header";
import Result from "./components/Result/Result";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <Header />
        </div>
        <div className="results">
          <Result />
          <Result />
          <Result />
          <Result />
        </div>
      </div>
    );
  }
}

export default App;
