import React from "react";
import { Link } from "react-router-dom";

function HomeButton(props) {
  return (
    <div className={`${props.color} flex gap-2`}>
      <nav>
        <Link to={props.url}>
          <button>{props.value} </button>
        </Link>
      </nav>{" "}
      <span>|</span>
    </div>
  );
}

export default HomeButton;
