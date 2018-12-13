import React from "react";
import ReactDOM from "react-dom";
import "tachyons";

import MarkerList from "./MarkerList.js";
import { robots } from "./Markers.js";

ReactDOM.render(
  <MarkerList markers={robots} />,
  document.getElementById("root")
);
