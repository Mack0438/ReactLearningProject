import React from "react";
import Map from "./Map.js";

const MarkerList = ({ markers }) => {
  const mapComponent = markers.map((user, i) => {
    return (
      <Map
        key={i}
        id={markers[i].id}
        name={markers[i].name}
        email={markers[i].email}
      />
    );
  });
  return <div>{mapComponent}</div>;
};

export default MarkerList;
