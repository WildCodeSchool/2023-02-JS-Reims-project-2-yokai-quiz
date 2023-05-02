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
  // const templesData = localStorage.getItem("temples");
  // const temples = JSON.parse(templesData);
  // console.log(temples);
  return (
    <div className="score">
      <p>{localStorage.getItem("playerName")}</p>
      <div className="templeScore">
        {templeData.map((temple) => (
          <figure key={temple.id}>
            <h3>{temple.templeName}</h3>
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}${temple.yokaiImage}`}
              alt={temple.yokaiName}
            />
            <figcaption>{temple.yokaiName}</figcaption>
            <p>{temple.level}</p>
          </figure>
        ))}
      </div>
    </div>
  );
}
export default Score;
