import { Route, Routes } from "react-router-dom";


import Game from "./components/Game";
import Home from "./components/Home";

import "./App.css";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
