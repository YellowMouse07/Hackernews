import React from "react";
import { useNavigate } from "react-router-dom";
function Comments(props) {
  const comments = props.kids;
  const navigate = useNavigate();

  function fetchClickComment() {
    const arrOfKids = props.kids;
    navigate(`/comment/${props.id}`, {
      state: { kid: arrOfKids[props.index] },
    });
    console.log(props);
  }
  return (
    <button onClick={fetchClickComment} className=" hover:underline">
      {comments
        ? props.descendants > 1
          ? props.descendants + " comments"
          : props.descendants + " comment"
        : "No comments"}
    </button>
  );
}

export default Comments;
