import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

import { ageUp, ageDown } from "./store/actions";

import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Age-label">
          your age: <span>{this.props.age}</span>
        </div>
        <button onClick={this.props.onAgeUp}>Age Up</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
        <div>
          {this.props.loading && (
            <img src={logo} alt="loading_spinner" className="App-logo" />
          )}
        </div>
        <div>
          <h1>Age Up fire the Async dispatcher</h1>
          {console.log(this.props)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age,
    loading: state.loading,
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch(ageUp(1)),
    onAgeDown: () => dispatch(ageDown(1)),
  };
};
export default connect(mapStateToProps, mapDispachToProps)(App);
