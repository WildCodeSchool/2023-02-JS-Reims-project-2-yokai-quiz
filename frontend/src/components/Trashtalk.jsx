import { useEffect, useState } from "react";

function Trashtalk() {
  const [trashtalkData, setTrashtalkData] = useState([]);
  const random = Math.floor(Math.random() * trashtalkData.length);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/trashtalk`)
      .then((resp) => resp.json())
      .then((data) => {
        setTrashtalkData(data);
      });
  }, []);
  return <div className="trashtalk">{trashtalkData[random]}</div>;
}

export default Trashtalk;
