import { Header } from "./header/Header";
import { Body } from "./body/Body";
import { Footer } from "./footer/Footer";
import React from "react";

function Home() {
  return (
    <div className="font-verdana min-h-[100vh] px-28 py-3">
      <Header id="home" name="Hacker News" navbar={true} />

      <Body />

      <Footer />
    </div>
  );
}

export default Home;
