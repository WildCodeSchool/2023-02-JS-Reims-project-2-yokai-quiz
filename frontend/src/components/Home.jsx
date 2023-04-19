import { Link } from "react-router-dom";
import kami from "../assets/kami.png";
import UsernameInput from "./Connexion";
import Titre from "../assets/Titre.png";

function Home() {
  return (
    <div>
      <img src={Titre} alt="Logo" className="logo" />
      <img src={kami} alt="kami" className="Yokai" />
      <UsernameInput />
      <div className="marque-ver">
        <div className="msg">
          "Il existe un monde au-delà de notre réalité, un monde peuplé de
          créatures mystiques et surnaturelles. Dans ce monde, les yokai règnent
          en maîtres, des esprits maléfiques qui hantent les forêts, les
          montagnes et les villages du Japon. Les yokai prennent de nombreuses
          formes, allant des fantômes et des démons aux animaux et aux objets
          inanimés. Ils sont capables de causer des maladies, de provoquer des
          catastrophes naturelles et même de posséder des êtres humains. C'est
          dans ce monde que se déroule notre histoire, une histoire de danger,
          de courage et de persévérance face aux forces surnaturelles qui
          menacent les êtres humains.
        </div>
      </div>
      <Link to="/map">
        <button type="button">Start</button>
      </Link>
    </div>
  );
}

export default Home;
