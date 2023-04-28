import { Route, Routes } from "react-router-dom";
import Trashtalk from "./components/Trashtalk";
import Game from "./components/Game";
import Home from "./components/Home";
import "react-tooltip/dist/react-tooltip.css";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/trashtalk" element={<Trashtalk />} />
      </Routes>
    </div>
  );
}

export default App;
