import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./MainPage.css";
import Header from "../components/Header";

function MainPage(props) {
  const [filteredRobots, setFilteredRobots] = useState([]);
  const {
    searchField,
    onSearchChange,
    robots,
    onRequestRobots,
    isPending,
  } = props;

  //componentDidMount
  useEffect(() => {
    componentDidMount();
  }, [robots.length]); //notice the empty array here

  async function componentDidMount() {
    if (robots.length === 0) onRequestRobots();
    if (robots.length > 0) setFilteredRobots(robots);
  }

  function filterRobots(robots) {
    return robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
  }

  useEffect(() => {
    if (robots.length) {
      setFilteredRobots(filterRobots(robots));
    }
  }, [searchField.length]);

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
