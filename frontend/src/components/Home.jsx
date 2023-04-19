import { Link } from "react-router-dom";
import kami from "../assets/kami.png";
import UsernameInput from "./Connexion";

function Home() {
  return (
    <div>
      <h1>Yokai Quiz</h1>
      <img src={kami} alt="kami" />
      <UsernameInput />
      <Link to="/map">
        <button type="button">Start</button>
      </Link>
    </div>
  );
}

export default Home;
