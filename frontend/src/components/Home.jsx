import { Link } from "react-router-dom";
import kami from "../assets/kami.png";
import UsernameInput from "./Connexion";
import Titre from "../assets/Titre.png";

function Home() {
  return (
    <>
      <div className="logo">
        <img src={Titre} alt="Logo" />
      </div>
      <img src={kami} alt="kami" className="Yokai" />
      <UsernameInput />
      <div className="marque-ver">
        <div className="msg">
          There is a world beyond our reality, a world populated by mystical and
          supernatural creatures. In this world, yokai reign supreme -
          malevolent spirits that haunt the forests, mountains, and villages of
          Japan. Yokai take many forms, ranging from ghosts and demons to
          animals and inanimate objects. They are capable of causing illnesses,
          provoking natural disasters, and even possessing human beings.It is in
          this world that our story takes place - a tale of danger, courage, and
          perseverance in the face of supernatural forces that threaten human
          beings.
        </div>
      </div>
      <Link to="/game">
        <button type="button">Start</button>
      </Link>
    </>
  );
}

export default Home;
