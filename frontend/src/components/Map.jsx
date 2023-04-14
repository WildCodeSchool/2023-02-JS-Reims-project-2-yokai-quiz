import PropTypes from "prop-types";
import templeImage from "../assets/templeImage.jpg";

function Map({ temples }) {
  return temples.map((temple) => (
    <button type="button" key={temple.id} className="buttonTemple">
      <img src={templeImage} alt={temple.templeName} />
      <p>{temple.templeName}</p>
    </button>
  ));
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
};

export default Map;
