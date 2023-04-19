import React from "react";
import kami from "../assets/kami.png";
import UsernameInput from "./Connexion";

function Home() {
  return (
    <div>
      <h1>Yokai Quiz</h1>
      <img src={kami} alt="kami" />
      <UsernameInput />
      <button type="button">Start</button>
    </div>
  );
}

export default Home;
