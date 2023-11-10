import React from "react";
import HomeButton from "../components/HomeButton";
function HeaderNavBar() {
  return (
    <>
      <HomeButton value="welcome" />
      <HomeButton value="new" />
      <HomeButton value="past" />
      <HomeButton value="comments" />
      <HomeButton value="ask" />
      <HomeButton value="show" />
      <HomeButton value="jobs" />
      <HomeButton value="submit" url="/submit" />
    </>
  );
}

export default HeaderNavBar;
