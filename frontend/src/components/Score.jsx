import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Score({ musicHandle }) {
  const [templeData, setTempleData] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/temples`)
      .then((resp) => resp.json())
      .then((data) => {
        setTempleData(data);
      });
  }, []);
  function calcTime(time) {
    const hours = Math.floor(time / 360000);

    const minutes = Math.floor((time % 360000) / 6000);

    const seconds = Math.floor((time % 6000) / 100);

    const milliseconds = time % 100;

    return (
      <>
        {hours}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
      </>
    );
  }
  return (
    <div className="score">
      <h1 className={localStorage.getItem("gameover") === "gameover" && "over"}>
        Player Name: {localStorage.getItem("playerName")}
      </h1>
      <Link to="/">
        {localStorage.getItem("gameover") === "gameover" ? (
          <button type="button" className="game-over">
            Game Over
          </button>
        ) : (
          <button type="button">Return menu</button>
        )}
      </Link>
      <button type="button" className="musicButtonScore" onClick={musicHandle}>
        Music
      </button>
      <div
        className={`templeScore ${
          localStorage.getItem("gameover") === "gameover" && "over"
        }`}
      >
        <figure>
          <h4>all scores</h4>
          <p>
            The number of easy temples finished:{" "}
            {localStorage.getItem("easy temple") / 5}
          </p>
          <p>
            The number of medium temples finished:{" "}
            {localStorage.getItem("medium temple") / 5}
          </p>
          <p>
            The number of hard temples finished:{" "}
            {localStorage.getItem("hard temple") / 5}
          </p>
          <p>Score: {localStorage.getItem("score")}</p>
        </figure>
        {templeData.map((temple) => (
          <figure key={temple.id}>
            <h4>{temple.templeName}</h4>
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}${temple.yokaiImage}`}
              alt={temple.yokaiName}
            />
            <figcaption>{temple.yokaiName}</figcaption>
            <p>Difficulty: {temple.level}</p>

            {localStorage.getItem(`${temple.templeName} best time`) ? (
              <p>
                Best time:{" "}
                {calcTime(
                  localStorage.getItem(`${temple.templeName} best time`)
                )}
              </p>
            ) : (
              <p>Best time: no time</p>
            )}
          </figure>
        ))}
      </div>
    </div>
  );
}
Score.propTypes = {
  musicHandle: PropTypes.func.isRequired,
};
export default Score;
