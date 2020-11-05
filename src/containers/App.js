import React from "react";
import "../containers/App.css";
import { setSearchField, requestRobots } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import MainPage from "../components/MainPage";

function App() {
  const searchField = useSelector((state) => state.searchRobots.searchField);
  const robots = useSelector((state) => state.requestRobots.robots);
  const isPending = useSelector((state) => state.requestRobots.isPending);

  const dispatch = useDispatch();

  const onRequestRobots = () => {
    requestRobots(dispatch);
  };

  const onSearchChange = (event) => {
    dispatch(setSearchField(event.target.value));
  };

  const props = {
    searchField,
    robots,
    isPending,
    onRequestRobots,
    onSearchChange,
  };

  return <MainPage {...props} />;
}

export default App;
