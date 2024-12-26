import "./Header.css";
import img1 from "../../assets/img/clgLogo.jpg";
import img2 from "../../assets/img/RUSA.jpeg";
import img3 from "../../assets/img/PM-USHA.png";
import img4 from "../../assets/img/interactionLogo.webp";
import img5 from "../../assets/img/naacLogo.jpg";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="logos">
            <img src={img1} alt="Logo1" className="logo" />
            <img src={img2} alt="Logo2" className="logo" />
            <img src={img3} alt="Logo3" className="logo" />
            <img src={img4} alt="Logo4" className="logo" />
            <img src={img5} alt="Logo5" className="logo" />
          </div>
          <div className="content">
            <h2>PROGRESSIVE EDUCATION SOCIETY'S</h2>
            <h1>
              Modern College Of Arts, Science & Commerce (Autonomous),
              Ganeshkhind, Pune-16.
            </h1>
            <h3>
              Affiliated to Savitribai Phule Pune University NAAC with A+ Grade,
              DST-Fist, DBT Star College
            </h3>
            <h2 className="grants">GRANTS TO STRENGTHEN COLLEGES SCHEME OF</h2>
            <h2 className="highlight">PM-USHA</h2>
            <h3>
              GOVERNMENT OF MAHARASHTRA: STATE PROJECT DIRECTORATE (SPD)
              <br />
              RASHTRIYA UCHCHATAR SHIKSHA ABHIYAN (RUSA)
            </h3>
            <h3>NATIONAL CONFERENCE ON DATA SCIENCE AND ITS CHALLENGES</h3>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
