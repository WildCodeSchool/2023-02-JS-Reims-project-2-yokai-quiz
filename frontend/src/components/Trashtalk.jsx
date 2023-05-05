import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Trashtalk({ talkMalus }) {
  const [trashtalkData, setTrashtalkData] = useState([]);
  const random = Math.floor(Math.random() * trashtalkData.length);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/trashtalk`)
      .then((resp) => resp.json())
      .then((data) => {
        setTrashtalkData(data);
      });
  }, []);
  return (
    <div className="bulle">
      <div className="trashtalk">
        {talkMalus.length < 1 ? trashtalkData[random] : talkMalus}
      </div>
    </div>
  );
}
Trashtalk.propTypes = {
  talkMalus: PropTypes.string.isRequired,
};

export default Trashtalk;
