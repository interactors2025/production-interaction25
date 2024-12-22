
import "./Home.css";
import Coordinators from "../Coordinators/Coordinators";
import { useNavigate } from "react-router-dom";
import Sponsors from "../Sponsers/Sponsors";
import Header from "../Header/Header";
import CardsGrid from "../CardsGrid/CardsGrid";
/*const rotatingWords = [
  "Gamer Strike",
  "Gold Rush",
  "Wisdom War",
  "Creativity Club",
  "Quick Reel",
  "Quantum Assembler",
  "Hack in the Dark",
];*/

const Home = () => {
const navigate = useNavigate(); 

  const goto = () => {
    navigate("/form");
  };

  return (
    <>
    <Header />
      <div className="interaction-container">
        <h1 className="interaction-title">Interaction 2K25</h1>
        <button className="cta-button" onClick={goto}>
          Register
        </button>
      </div>
      <Coordinators />
      <Sponsors />
      <CardsGrid/>
    </>
  );
};

export default Home;
