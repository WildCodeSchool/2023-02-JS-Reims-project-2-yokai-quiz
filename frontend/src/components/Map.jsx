import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import PropTypes from "prop-types";
import templeImage from "../assets/Shinto.png";
import map from "../assets/map_jap.png";

function Map({ temples, setSwitchToTemple }) {
  function click() {
    setSwitchToTemple(true);
  }
  return (
    <section className="mapContainer">
      <img src={map} alt="carte du japon" className="japonMap" />
      {temples.map((temple) => (
        <>
          <button
            onDoubleClick={click}
            type="button"
            key={temple.id}
            className={`buttonTemple buttonTemple${temple.id}`}
          >
            <img src={templeImage} alt={temple.templeName} />
          </button>
          <Tooltip anchorSelect={`.buttonTemple${temple.id}`} clickable>
            <h3>Temple {temple.templeName}</h3>
            <p>Level: {temple.level}</p>
            <p>
              <img src="" alt={temple.yokaiName} />
              {` ${temple.yokaiName}`}
            </p>
            <button type="button" onClick={click}>
              Open Temple
            </button>
          </Tooltip>
        </>
      ))}
    </section>
  );
}

Map.propTypes = {
  temples: PropTypes.arrayOf(
    PropTypes.shape({
      templeName: PropTypes.string.isRequired,
      story: PropTypes.string.isRequired,
      yokaiName: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      level: PropTypes.number.isRequired,
      yokaiLife: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  setSwitchToTemple: PropTypes.func.isRequired,
};

export default Map;
