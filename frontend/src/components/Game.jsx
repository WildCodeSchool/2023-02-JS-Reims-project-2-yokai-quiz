import { useState, useEffect } from "react";
import Temple from "./Temple";
import Map from "./Map";

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

  if (localStorage.getItem("gameover") === "gameover") {
    localStorage.clear();
  }

  const temple = templeData.find((data) => data.id === templeChoice);

  return switchToTemple === false ? (
    <Map
      setSwitchToTemple={setSwitchToTemple}
      temples={templeData}
      templeChoice={setTempleChoice}
    />
  ) : (
    <Temple temple={temple} setSwitchToTemple={setSwitchToTemple} />
  );
}

export default Game;
