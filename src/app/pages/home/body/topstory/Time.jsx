import React from "react";

const Time = ({ time }) => {
  const date = new Date();
  const timeStamp = date.getTime();
  const seconds = Math.floor(timeStamp / 1000);
  const oldTimeStamp = Math.floor(new Date(time));
  const difference = Math.abs(seconds - oldTimeStamp);
  

  if (difference < 60) {
    // Less than a minute has passed:

    return <div>{difference} seconds ago</div>;
  } else if (difference < 3600) {
    // Less than an hour has passed:
    return <div>{Math.floor(difference / 60)} minutes ago </div>;
  } else if (difference < 86400) {
    // Less than a day has passed:
    return <div>{Math.floor(difference / 3600)} hours ago</div>;
  } else if (difference < 2620800) {
    // Less than a month has passed:
    return <div>{Math.floor(difference / 86400)} days ago</div>;
  } else if (difference < 31449600) {
    // Less than a year has passed:
    return <div>{Math.floor(difference / 2620800)} months ago</div>;
  } else {
    // More than a year has passed:
    return <div>{Math.floor(difference / 31449600)} years ago</div>;
  }

};

export default Time;
