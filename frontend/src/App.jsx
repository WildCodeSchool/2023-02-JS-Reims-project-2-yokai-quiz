import { Route, Routes } from "react-router-dom";
import Trashtalk from "./components/Trashtalk";
import Game from "./components/Game";
import Home from "./components/Home";
import "react-tooltip/dist/react-tooltip.css";
import "./App.scss";
import Score from "./components/Score";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/trashtalk" element={<Trashtalk />} />
        <Route path="/score" element={<Score />} />
      </Routes>
    </div>
  );
}

export default App;
