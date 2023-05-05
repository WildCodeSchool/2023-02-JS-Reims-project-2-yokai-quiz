import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import HistoryOfTheTemple from "./HistoryOfTheTemple";
import Quizz from "./Quizz";
import Trashtalk from "./Trashtalk";
import Stopwatch from "./Stopwatch";

function Temple({ temple, setSwitchToTemple, musicHandle }) {
  const [switchToQuizz, setSwitchToQuizz] = useState(false);
  const [yokaiLife, setYokaiLife] = useState(temple.yokaiLife);
  const [playerLife, setPlayerLife] = useState(5);
  const [quizz, setQuizz] = useState();
  const [loading, setLoading] = useState(false);
  const [malus, setMalus] = useState(4);
  const [talkMalus, setTalkMalus] = useState("");
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
      localStorage.setItem("gameover", "gameover");
      document.location.href = "/score";
    }
    if (yokaiLife <= 0) {
      const templeValidationScore =
        localStorage.getItem(`${temple.level} temple`) ?? 0;
      localStorage.setItem(
        `${temple.level} temple`,
        parseInt(templeValidationScore, 10) + 5
      );
    }
    if (yokaiLife === 1) {
      setMalus(Math.floor(Math.random() * 4));
    }
    if (yokaiLife === 1 && temple.level === "easy") {
      setTalkMalus(
        "I've faced tougher opponents in my sleep. All the answers, even the hidden ones, could be correct."
      );
    }
    if (yokaiLife === 1 && temple.level === "medium") {
      setTalkMalus(
        "You have 30 seconds to read the answers before everything gets hidden, you big loser !!!"
      );
    }
  }, [playerLife, yokaiLife]);

  return (
    <div className="Game">
      <button type="button" className="musicButtonTemple" onClick={musicHandle}>
        Music
      </button>
      {yokaiLife < 1 && (
        <div className="win">
          <h1>Win</h1>
          <p>
            Congratulations on your victory! Whatever the field in which you
            have succeeded, it is an accomplishment to be celebrated. Keep
            working hard and aiming higher to achieve your future goals. Victory
            is a beautiful reward for the efforts you have put in. Enjoy this
            moment of success and be proud of yourself!
          </p>
          <button type="button" onClick={() => setSwitchToTemple(false)}>
            continue
          </button>
        </div>
      )}
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
        {switchToQuizz === true && <Trashtalk talkMalus={talkMalus} />}
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
          malus={malus}
          setTalkEasymalus={setTalkMalus}
        />
      )}
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
  musicHandle: PropTypes.func.isRequired,
};

export default Temple;
