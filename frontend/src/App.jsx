import { useState } from "react";

import Quizz from "./components/Quizz";
import Map from "./components/Map";

import "./App.css";

function App() {
  const [templeData, setTempleData] = useState([]);

  const templeOfJapan = () => {
    fetch("http://localhost:5000/temples")
      .then((resp) => resp.json())
      .then((data) => {
        setTempleData(data);
      });
  };
  return (
    <div className="App">
      <Quizz />
      <p>coucou</p>
      <button type="button" onClick={templeOfJapan}>
        click me
      </button>
      <Map temples={templeData} />
    </div>
  );
}

export default App;
