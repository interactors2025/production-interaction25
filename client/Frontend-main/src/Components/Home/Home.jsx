import "./Home.css";
import { useNavigate } from "react-router-dom";
import Sponsors from "../Sponsers/Sponsors";
import Header from "../Header/Header";

const Home = () => {
  const navigate = useNavigate();

  const goto = () => {
    navigate("/form");
  };

  return (
    <>
      <Header />
      <div className="interaction-container">
        <h1 className="interaction-title">
          National Conference on Data Science and Its Challenges Interaction
          2025
        </h1>
        <button className="cta-button" onClick={goto}>
          Register
        </button>
      </div>
      <Sponsors />
    </>
  );
};

export default Home;
