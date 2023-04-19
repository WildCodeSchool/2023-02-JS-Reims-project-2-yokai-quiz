import PropTypes from "prop-types";

function HistoryOfTheTemple({ setSwitchToQuizz, story }) {
  return (
    <div>
      <p className="story">{story}</p>
      <button onClick={() => setSwitchToQuizz(true)} type="button">
        skip⇒
      </button>
    </div>
  );
}

HistoryOfTheTemple.propTypes = {
  setSwitchToQuizz: PropTypes.func.isRequired,
  story: PropTypes.string.isRequired,
};
export default HistoryOfTheTemple;
