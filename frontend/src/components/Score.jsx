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

  return (
    <div className="score">
      <p>{localStorage.getItem("playerName")}</p>
      <p>best time: {localStorage.getItem("best time")}</p>
      <div className="templeScore">
        {templeData.map((temple) => (
          <figure key={temple.id}>
            <h3>{temple.templeName}</h3>
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}${temple.yokaiImage}`}
              alt={temple.yokaiName}
            />
            <figcaption>{temple.yokaiName}</figcaption>
            <p>Difficulty: {temple.level}</p>
            <p>
              Best time:{" "}
              {localStorage.getItem(`${temple.templeName} best time`) ??
                "unmade temple"}
            </p>
            {localStorage.getItem(`${temple.templeName} best time`) && (
              <p>
                {localStorage.getItem(`${temple.templeName} wrong answer`)}{" "}
                wrong answer
              </p>
            )}
          </figure>
        ))}
      </div>
    </div>
  );
}
export default Score;
