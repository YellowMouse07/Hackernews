import React from "react";
import { useNavigate } from "react-router-dom";
function Author(props) {
  const navigate = useNavigate();
  const goToAbout = () => {
    navigate(`/user/${props.author}`, { state: { id: props.id } });
    console.log(props.id);
  };
  return (
    <span>
      by{" "}
      <button onClick={goToAbout} className=" hover:underline">
        {props.author}
      </button>
    </span>
  );
}

export default Author;
