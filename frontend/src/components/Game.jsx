import { useState, useEffect } from "react";

import Temple from "./Temple";
import Map from "./Map";

function Game() {
  const [switchToTemple, setSwitchToTemple] = useState(false);
  const [templeData, setTempleData] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/temples`)
      .then((resp) => resp.json())
      .then((data) => {
        setTempleData(data);
      });
  }, []);

  return switchToTemple === false ? (
    <Map setSwitchToTemple={setSwitchToTemple} temples={templeData} />
  ) : (
    <Temple />
  );
}

export default Game;
