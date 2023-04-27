import { Tooltip } from "react-tooltip";
import PropTypes from "prop-types";
import templeImage from "../assets/Shinto.png";
import map from "../assets/map_jap.png";

function Map({ temples, setSwitchToTemple, templeChoice }) {
  function click(id) {
    templeChoice(id);
    setSwitchToTemple(true);
  }
  return (
    <section className="mapContainer">
      <img src={map} alt="carte du japon" className="japonMap" />
      {temples.map((temple) => (
        <>
          <button
            onDoubleClick={() => click(temple.id)}
            key={temple.id}
            type="button"
            className={`buttonTemple buttonTemple${temple.id}`}
          >
            <img src={templeImage} alt={temple.templeName} />
          </button>
          <Tooltip
            className="tooltip"
            classNameArrow="arrow-tooltip"
            anchorSelect={`.buttonTemple${temple.id}`}
            clickable
          >
            <h3>Temple {temple.templeName}</h3>
            <p>Level: {temple.level}</p>
            <p>
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}${temple.yokaiImage}`}
                alt={temple.yokaiName}
              />
              {` ${temple.yokaiName}`}
            </p>
            <button type="button" onClick={() => click(temple.id)}>
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
  templeChoice: PropTypes.func.isRequired,
};

export default Map;
