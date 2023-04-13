import { useState } from "react";
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
      <button type="button" onClick={templeOfJapan}>
        click me
      </button>
      <Map temples={templeData} />
    </div>
  );
}

export default App;
