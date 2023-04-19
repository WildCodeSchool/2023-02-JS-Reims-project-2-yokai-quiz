import PropTypes from "prop-types";

function HistoryOfTheTemple({ setSwitchToQuizz }) {
  return (
    <>
      <p className="story">test</p>
      <button onClick={() => setSwitchToQuizz(true)} type="button">
        skip⇒
      </button>
    </>
  );
}

HistoryOfTheTemple.propTypes = {
  setSwitchToQuizz: PropTypes.func.isRequired,
};
export default HistoryOfTheTemple;
