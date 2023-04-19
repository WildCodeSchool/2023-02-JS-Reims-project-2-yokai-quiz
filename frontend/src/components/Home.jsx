import { Link } from "react-router-dom";
import kami from "../assets/kami.png";

function Home() {
  return (
    <div>
      <img src={kami} alt="kami" />
      <Link to="/map">
        <button type="button">Start</button>
      </Link>
    </div>
  );
}

export default Home;
