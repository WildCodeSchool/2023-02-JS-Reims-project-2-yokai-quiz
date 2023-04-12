import { useState } from "react";

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
      {templeData.map((temple) => (
        <p key={temple.id}>{temple.name}</p>
      ))}
    </div>
  );
}

//  Quizz

function Quizz() {
  return "quiz";
}

export default App;
