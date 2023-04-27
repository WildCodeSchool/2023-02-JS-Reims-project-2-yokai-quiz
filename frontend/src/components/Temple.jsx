import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import HistoryOfTheTemple from "./HistoryOfTheTemple";
import Quizz from "./Quizz";

function Temple({ temple }) {
  const [switchToQuizz, setSwitchToQuizz] = useState(false);
  const [yokaiLife, setYokaiLife] = useState(temple.yokaiLife);
  const [playerLife, setPlayerLife] = useState(5);
  const [quizz, setQuizz] = useState();
  const amount = 5 + 5;
  const difficulty = temple.level;

  useEffect(() => {
    fetch(
      `https://opentdb.com/api.php?amount=${amount}&category=31&difficulty=${difficulty}&type=multiple`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setQuizz({ questions: data.results });
      });
  }, []);

  useEffect(() => {
    document.title = `Yokai Quiz|${temple.templeName}`;
  }, []);

  useEffect(() => {
    if (playerLife <= 0) {
      document.location.href = "/";
    }
    if (yokaiLife <= 0) {
      document.location.href = "/game";
    }
  }, [playerLife, yokaiLife]);

  return (
    <div className="Game">
      <div className="yokai">
        <h1>{temple.yokaiName}</h1>
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
        />
      ) : (
        <Quizz
          yokaiLife={yokaiLife}
          setYokaiLife={setYokaiLife}
          playerLife={playerLife}
          setPlayerLife={setPlayerLife}
          quizz={quizz}
        />
      )}
      <div className="player">
        <h1>Player's name</h1>
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
    yokaiName: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    level: PropTypes.string.isRequired,
    yokaiLife: PropTypes.number.isRequired,
    yokaiImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default Temple;
