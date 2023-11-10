import React from "react";
import HomeButton from "../components/HomeButton";
function FooterNavBar() {
  return (
    <>
      <HomeButton value="Guidelines" color="text-grey-n" />
      <HomeButton value="FAQ" />
      <HomeButton value="Lists" />
      <HomeButton
        url="https://github.com/HackerNews/API"
        value="API"
        color="text-grey-n"
      />
      <HomeButton value="Security" color="text-grey-n" />
      <HomeButton value="Legal" />
      <HomeButton value="Apply to YC" color="text-grey-n" />
      <HomeButton value="Contact" />
    </>
  );
}

export default FooterNavBar;
