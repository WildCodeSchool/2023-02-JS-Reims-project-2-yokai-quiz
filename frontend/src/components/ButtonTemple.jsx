import PropTypes from "prop-types";

function Temples({ temples }) {
  return temples.map((temple) => (
    <button type="button" key={temple.id}>
      {temple.nameTemple}
    </button>
  ));
}

Temples.propTypes = {
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

export default Temples;
