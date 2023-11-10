import React from "react";

function Points(props) {
  return <p>{props.points ? props.points : 0} points</p>;
}

export default Points;
