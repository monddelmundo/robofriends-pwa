import React, { useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./MainPage.css";
import Header from "../components/Header";

function MainPage(props) {
  const {
    searchField,
    onSearchChange,
    robots,
    onRequestRobots,
    isPending,
  } = props;

  //componentDidMount
  useEffect(() => {
    onRequestRobots();
  }, []); //notice the empty array here

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

  //tc = text center
  return isPending ? (
    <h1 name="loading">Loading...</h1>
  ) : (
    <div className="tc">
      <Header />
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}

export default MainPage;
