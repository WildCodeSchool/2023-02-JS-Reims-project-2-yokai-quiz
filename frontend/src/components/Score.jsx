import { useState, useEffect } from "react";

function Score() {
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
      <p>Player Name: {localStorage.getItem("playerName")}</p>
      <div className="templeScore">
        <figure>
          <h4>all score</h4>
          <p>
            Nombre de temple facile fini:{" "}
            {localStorage.getItem("easy temple") / 5}
          </p>
          <p>
            Nombre de temple medium fini:{" "}
            {localStorage.getItem("medium temple") / 5}
          </p>
          <p>
            Nombre de temple hard fini:{" "}
            {localStorage.getItem("hard temple") / 5}
          </p>
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
              <>
                <p>
                  Best time:{" "}
                  {calcTime(
                    localStorage.getItem(`${temple.templeName} best time`)
                  )}
                </p>
                <p>
                  {localStorage.getItem(
                    `${temple.templeName} incorrect answers`
                  )}{" "}
                  all incorrect answers
                </p>
              </>
            ) : (
              <p>Best time: no time</p>
            )}
          </figure>
        ))}
      </div>
    </div>
  );
}
export default Score;
