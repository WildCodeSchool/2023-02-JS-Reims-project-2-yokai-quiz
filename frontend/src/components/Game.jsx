import { useState } from "react";

let start = false;

function Game() {
  const [templeData, setTempleData] = useState([]);

  if (start === false) {
    fetch("http://localhost:5000/temples")
      .then((resp) => resp.json())
      .then((data) => {
        setTempleData(data);
        start = true;
      });
  }

  return (
    <>
      {templeData.map((temple) => (
        <p key={temple.id}>{temple.templName}</p>
      ))}
    </>
  );
}

export default Game;
