import PropTypes from "prop-types";
import templeImage from "../assets/Shinto.png";
import map from "../assets/map_jap.png";

function Map({ temples, setSwitchToTemple }) {
  return (
    <section className="mapContainer">
      <img src={map} alt="carte du japon" className="japonMap" />
      {temples.map((temple) => (
        <button
          onClick={() => setSwitchToTemple(true)}
          type="button"
          key={temple.id}
          className={`buttonTemple buttonTemple${temple.id}`}
        >
          <img src={templeImage} alt={temple.templeName} />
        </button>
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
