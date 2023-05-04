import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import HistoryOfTheTemple from "./HistoryOfTheTemple";
import Quizz from "./Quizz";
import Trashtalk from "./Trashtalk";
import Score from "./Score";
import Stopwatch from "./Stopwatch";

function Temple({ temple, setSwitchToTemple }) {
  const [switchToQuizz, setSwitchToQuizz] = useState(false);
  const [yokaiLife, setYokaiLife] = useState(0);
  // const [yokaiLife, setYokaiLife] = useState(temple.yokaiLife);
  const [playerLife, setPlayerLife] = useState(5);
  const [quizz, setQuizz] = useState();
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const amount = 5 + 5;
  const difficulty = temple.level;

  useEffect(() => {
    fetch(
      `https://opentdb.com/api.php?amount=${amount}&category=31&difficulty=${difficulty}&type=multiple`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setQuizz({ questions: data.results });
        setLoading(true);
      });
  }, []);

  useEffect(() => {
    document.title = `Yokai Quiz|${temple.templeName}`;
  }, []);

  useEffect(() => {
    if (playerLife <= 0) {
      document.location.href = "/";
    }
  }, [playerLife, yokaiLife]);

  return (
    <div className="Game">
      <button
        type="button"
        className="returnMap"
        onClick={() => setSwitchToTemple(false)}
      >
        Return Map
      </button>
      <Stopwatch templeName={temple.templeName} yokaiLife={yokaiLife} />
      <div className="yokai">
        <h1>{temple.yokaiName}</h1>
        {switchToQuizz === true && <Trashtalk />}
        <img
          src={
            temple.yokaiImage
              ? `${import.meta.env.VITE_BACKEND_URL}${temple.yokaiImage}`
              : temple.yokaiImage
          }
          alt={temple.yokaiName}
        />
        <div className="health-icons">
          {Array.from({ length: yokaiLife }, (_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#bf0404"
              width="3rem"
              height="3rem"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 21.35l-1.45-1.32C5.4 14.79 2 11.58 2 7.5 2 4.42 4.42 2 7.5 2c2.34 0 4.47 1.19 5.74 3.15C14.03 3.19 16.16 2 18.5 2 21.58 2 24 4.42 24 7.5c0 4.08-3.4 7.29-8.55 12.53L12 21.35z" />
            </svg>
          ))}
        </div>
      </div>

      {switchToQuizz === false ? (
        <HistoryOfTheTemple
          setSwitchToQuizz={setSwitchToQuizz}
          story={temple.yokaiStory}
          checkLoading={loading}
        />
      ) : (
        <Quizz
          yokaiLife={yokaiLife}
          setYokaiLife={setYokaiLife}
          playerLife={playerLife}
          setPlayerLife={setPlayerLife}
          quizz={quizz}
          setScore={setScore}
          score={score}
        />
      )}
      <Score score={score} />
      <div className="player">
        <h1>{localStorage.getItem("playerName")}</h1>
        <div className="health-icons">
          {Array.from({ length: playerLife }, (_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="green"
              width="3rem"
              height="3rem"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 21.35l-1.45-1.32C5.4 14.79 2 11.58 2 7.5 2 4.42 4.42 2 7.5 2c2.34 0 4.47 1.19 5.74 3.15C14.03 3.19 16.16 2 18.5 2 21.58 2 24 4.42 24 7.5c0 4.08-3.4 7.29-8.55 12.53L12 21.35z" />
            </svg>
          ))}
        </div>
      </div>
      {yokaiLife <= 0 && (
        <div className="popup">
          <h1>Temple {temple.templeName} purifier passer au prochain temple</h1>
          <button type="button" onClick={() => setSwitchToTemple(false)}>
            Map
          </button>
        </div>
      )}
    </div>
  );
}

Temple.propTypes = {
  temple: PropTypes.shape({
    templeName: PropTypes.string.isRequired,
    yokaiStory: PropTypes.shape({
      appearance: PropTypes.string,
      origin: PropTypes.string,
    }).isRequired,
    setSwitchToTemple: PropTypes.func.isRequired,
    yokaiName: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    level: PropTypes.string.isRequired,
    yokaiLife: PropTypes.number.isRequired,
    yokaiImage: PropTypes.string.isRequired,
  }).isRequired,
  setSwitchToTemple: PropTypes.func.isRequired,
};

export default Temple;
