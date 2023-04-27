import PropTypes from "prop-types";

function HistoryOfTheTemple({ setSwitchToQuizz, story }) {
  return (
    <div className="story">
      <h3>Appearance: </h3>
      <p>{story.appearance}</p>
      <h3>Story: </h3>
      <p>{story.origin}</p>
      <button onClick={() => setSwitchToQuizz(true)} type="button">
        skip⇒
      </button>
    </div>
  );
}

HistoryOfTheTemple.propTypes = {
  setSwitchToQuizz: PropTypes.func.isRequired,
  story: PropTypes.shape({
    appearance: PropTypes.string,
    origin: PropTypes.string,
  }).isRequired,
};
export default HistoryOfTheTemple;
