import { Link } from "react-router-dom";
import React, { useState } from "react";
import kami from "../assets/kami.png";
import Titre from "../assets/Titre.png";

function Home() {
  const [playerName, setPlayerName] = useState(
    localStorage.getItem("playerName") === "Nameless"
      ? ""
      : localStorage.getItem("playerName")
  );
  if (
    localStorage.getItem("playerName") == null ||
    localStorage.getItem("playerName").length < 1
  ) {
    localStorage.setItem("playerName", "Nameless");
  }
  if (localStorage.getItem("gameover") === "gameover") {
    localStorage.clear();
  }
  if (localStorage.getItem("music") == null) {
    localStorage.setItem("music", "true");
  }

  return (
    <section className="Home">
      <img src={Titre} className="logo" alt="Logo" />
      <img src={kami} alt="kami" className="Yokai" />
      <div className="login">
        <p>What's your name Hero ? </p>
        <input
          type="text"
          placeholder="Player name"
          value={playerName}
          onChange={(e) => {
            setPlayerName(e.target.value);

            localStorage.setItem("playerName", e.target.value);
          }}
        />
      </div>
      <div className="marque-ver">
        <div className="msg">
          <p>
            There is a world beyond our reality, a world populated by mystical
            and supernatural creatures. In this world, yokai reign supreme -
            malevolent spirits that haunt the forests, mountains, and villages
            of Japan. Yokai take many forms, ranging from ghosts and demons to
            animals and inanimate objects. They are capable of causing
            illnesses, provoking natural disasters, and even possessing human
            beings.It is in this world that our story takes place - a tale of
            danger, courage, and perseverance in the face of supernatural forces
            that threaten human beings.
          </p>
        </div>
      </div>
      <Link to="/game">
        <button type="button">Start</button>
      </Link>
      <Link to="/score">
        <button type="button" className="scoreButton" path="/score">
          Score
        </button>
      </Link>
      <button
        type="button"
        className="resetButton"
        onClick={() => {
          localStorage.clear();
          setPlayerName("");
        }}
      >
        Reset
      </button>
    </section>
  );
}

export default Home;
