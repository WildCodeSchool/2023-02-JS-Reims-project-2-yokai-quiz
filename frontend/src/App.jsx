import { Route, Routes } from "react-router-dom";

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
      </Routes>
    </div>
  );
}

export default App;
