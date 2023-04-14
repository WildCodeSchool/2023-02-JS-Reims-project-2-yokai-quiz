import { useState, useEffect } from "react";

function Game() {
  const [templeData, setTempleData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/temples")
      .then((resp) => resp.json())
      .then((data) => {
        setTempleData(data);
      });
  }, []);

  return (
    <>
      {templeData.map((temple) => (
        <p key={temple.id}>{temple.templeName}</p>
      ))}
    </>
  );
}

export default Game;
