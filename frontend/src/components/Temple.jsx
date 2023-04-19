import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import HistoryOfTheTemple from "./HistoryOfTheTemple";
import Quizz from "./Quizz";

function Temple({ temple }) {
  const [switchToQuizz, setSwitchToQuizz] = useState(false);

  useEffect(() => {
    document.title = "Temple";
  }, []);
  return (
    <div>
      <h1>{temple.yokaiName}</h1>
      <h1> {temple.yokaiLife} PV</h1>

      {switchToQuizz === false ? (
        <HistoryOfTheTemple setSwitchToQuizz={setSwitchToQuizz} />
      ) : (
        <Quizz />
      )}
    </div>
  );
}

Temple.propTypes = {
  temple: PropTypes.shape({
    templeName: PropTypes.string.isRequired,
    story: PropTypes.string.isRequired,
    yokaiName: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    level: PropTypes.number.isRequired,
    yokaiLife: PropTypes.number.isRequired,
  }).isRequired,
};

export default Temple;
