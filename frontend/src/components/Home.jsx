import React from "react";
import kami from "../assets/kami.png";

function Home() {
  return (
    <div>
      <img src={kami} alt="kami" />
      <button type="button">Start</button>
    </div>
  );
}

export default Home;
