import { useState } from "react";

import Game from "./components/Game";
import Home from "./components/Home";

function App() {
  const [switchToGame, setSwitchToGame] = useState(false);

  return (
    <div className="App">
      {switchToGame === false ? (
        <Home setSwitchToGame={setSwitchToGame} />
      ) : (
        <Game />
      )}
    </div>
  );
}

export default App;
