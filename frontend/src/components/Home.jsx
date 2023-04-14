import PropTypes from "prop-types";

import kami from "../assets/kami.png";

function Home({ setSwitchToGame }) {
  return (
    <div>
      <img src={kami} alt="kami" />
      <button onClick={setSwitchToGame} type="button">
        Start
      </button>
    </div>
  );
}

Home.propTypes = {
  setSwitchToGame: PropTypes.func.isRequired,
};
export default Home;
