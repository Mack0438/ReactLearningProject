import React from "react";

import MarkerList from "./MarkerList.js";
import { robots } from "./Markers.js";
import SearchBox from "./SearchBox.js";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: ""
    };
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    return (
      <div className="tc">
        <h1> Robots </h1>
        <SearchBox searchChange={this.onSearchChange} />
        <MarkerList markers={filteredRobots} />
      </div>
    );
  }
}

export default App;
