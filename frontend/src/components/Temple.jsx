import { useState } from "react";

import HistoryOfTheTemple from "./HistoryOfTheTemple";
import Quizz from "./Quizz";

function Temples() {
  const [switchToQuizz, setSwitchToQuizz] = useState(false);
  return (
    <div>
      {switchToQuizz === false ? (
        <HistoryOfTheTemple setSwitchToQuizz={setSwitchToQuizz} />
      ) : (
        <Quizz />
      )}
    </div>
  );
}

export default Temples;
