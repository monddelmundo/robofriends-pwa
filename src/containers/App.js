import React from "react";
import "../containers/App.css";
import { setSearchField, requestRobots } from "../actions";
import { connect } from "react-redux";
import MainPage from "../components/MainPage";

function App(props) {
  return <MainPage {...props} />;
}

function mapStateToProps(state) {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => requestRobots(dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
