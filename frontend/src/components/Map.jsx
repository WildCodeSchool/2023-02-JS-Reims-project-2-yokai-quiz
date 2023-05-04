import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import PropTypes from "prop-types";
import templeImage from "../assets/Shinto.png";
import map from "../assets/map_jap.png";
import fleurs from "../assets/fleur.png";

function Map({ temples, setSwitchToTemple, templeChoice }) {
  function click(id) {
    templeChoice(id);
    setSwitchToTemple(true);
  }
  useEffect(() => {
    document.title = `Yokai Quiz|Map`;
  }, []);

  function unlock(level) {
    switch (level) {
      case "medium":
        if (
          parseInt(localStorage.getItem(`easy temple`), 10) >= 10 &&
          localStorage.getItem(`easy temple`) != null
        ) {
          return true;
        }
        return false;

      case "hard":
        if (
          parseInt(localStorage.getItem(`medium temple`), 10) >= 10 &&
          localStorage.getItem(`medium temple`) != null
        ) {
          return true;
        }
        return false;

      default:
        return true;
    }
  }
  return (
    <section className="mapContainer">
      <div className="fleur">
        <img src={fleurs} className="fleurs" alt="fleurs" />
      </div>
      <img src={map} alt="carte du japon" className="japonMap" />
      {temples.map(
        (temple) =>
          unlock(temple.level) && (
            <>
              <button
                onDoubleClick={() => click(temple.id)}
                key={temple.id}
                type="button"
                className={`${
                  localStorage.getItem(`${temple.templeName} best time`) == null
                    ? "buttonTemple"
                    : "buttonTemple-check"
                } buttonTemple${temple.id}`}
              >
                <img src={templeImage} alt={temple.templeName} />
              </button>
              <Tooltip
                className={
                  localStorage.getItem(`${temple.templeName} best time`) == null
                    ? "tooltip"
                    : "tooltipcheck"
                }
                classNameArrow="arrow-tooltip"
                anchorSelect={`.buttonTemple${temple.id}`}
                clickable
              >
                <h3>Temple {temple.templeName}</h3>
                <p>Level: {temple.level}</p>
                <p>
                  <img
                    src={`${import.meta.env.VITE_BACKEND_URL}${
                      temple.yokaiImage
                    }`}
                    alt={temple.yokaiName}
                  />
                  {` ${temple.yokaiName}`}
                </p>
                <button type="button" onClick={() => click(temple.id)}>
                  Open Temple
                </button>
              </Tooltip>
            </>
          )
      )}
      <Link to="/" className="returnHome">
        <button type="button">Return menu</button>
      </Link>
    </section>
  );
}

Map.propTypes = {
  temples: PropTypes.arrayOf(
    PropTypes.shape({
      templeName: PropTypes.string.isRequired,
      yokaiStory: PropTypes.shape({
        appearance: PropTypes.string,
        origin: PropTypes.string,
      }).isRequired,
      yokaiName: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      level: PropTypes.string.isRequired,
      yokaiLife: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  setSwitchToTemple: PropTypes.func.isRequired,
  templeChoice: PropTypes.func.isRequired,
};

export default Map;
