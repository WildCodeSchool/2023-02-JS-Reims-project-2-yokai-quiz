import { useState, useEffect } from "react";

import Temple from "./Temple";
import Map from "./Map";

function Game() {
  const [switchToTemple, setSwitchToTemple] = useState(false);
  const [templeData, setTempleData] = useState([]);
  const [templeChoice, setTempleChoice] = useState(1);

  useEffect(() => {
    fetch("http://localhost:5000/temples")
      .then((resp) => resp.json())
      .then((data) => {
        setTempleData(data);
      });
  }, []);

  const temple = templeData.find((data) => data.id === templeChoice);

  return switchToTemple === false ? (
    <Map
      setSwitchToTemple={setSwitchToTemple}
      temples={templeData}
      templeChoice={setTempleChoice}
    />
  ) : (
    <Temple temple={temple} />
  );
}

export default Game;
