import { useState, useEffect } from "react";

import Temple from "./Temple";
import Map from "./Map";
import Stopwatch from "./Chrono";

function Game() {
  const [switchToTemple, setSwitchToTemple] = useState(false);
  const [templeData, setTempleData] = useState([]);
  const [templeChoice, setTempleChoice] = useState(2);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/temples`)
      .then((resp) => resp.json())
      .then((data) => {
        setTempleData(data);
      });
  }, []);
  const temple = templeData.find((data) => data.id === templeChoice);
  return (
    <>
      <Stopwatch />
      {switchToTemple === false ? (
        <Map
          setSwitchToTemple={setSwitchToTemple}
          temples={templeData}
          templeChoice={setTempleChoice}
        />
      ) : (
        <Temple temple={temple} />
      )}
    </>
  );
}

export default Game;
