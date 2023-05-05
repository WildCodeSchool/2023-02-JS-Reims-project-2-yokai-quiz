import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Game from "./components/Game";
import Home from "./components/Home";
import "react-tooltip/dist/react-tooltip.css";
import "./App.scss";
import Score from "./components/Score";

function App() {
  const [music, setMusic] = useState(localStorage.getItem("music"));
  function musicHandle() {
    if (music === "true") {
      localStorage.setItem("music", "false");
      setMusic("false");
    }
    if (music === "false") {
      localStorage.setItem("music", "true");
      setMusic("true");
    }
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/score" element={<Score />} />
      </Routes>
      {music === "true" && (
        <audio controls autoPlay>
          <source src="/src/assets/backgroundSong.mp3" />
          <track
            src="backgroundSong"
            kind="captions"
            label="english_captions"
          />
        </audio>
      )}
      <button type="button" className="musicButton" onClick={musicHandle}>
        Music
      </button>
    </div>
  );
}

export default App;
