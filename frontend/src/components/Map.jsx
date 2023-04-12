import PropTypes from "prop-types";
import Temples from "./ButtonTemple";

function Map({ temples }) {
  return (
    <div>
      <Temples temples={temples} />
    </div>
  );
}

Map.propTypes = {
  temples: PropTypes.arrayOf(
    PropTypes.shape({
      nameTemple: PropTypes.string.isRequired,
      story: PropTypes.string.isRequired,
      nemeYokai: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      level: PropTypes.number.isRequired,
      lifeYokai: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default Map;
