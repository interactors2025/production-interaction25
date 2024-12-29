import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Lock scrolling when menu is open (for mobile)
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [isOpen]);

  const handleDownload =() => {
    const link = document.createElement('a');
    link.href = 'src/assets/ICS_Interaction_Rules_2025.pdf'; 
    link.download = 'ICS_Interaction_Rules_2025'; 
    link.click(); 
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logoI" style={{ marginLeft: "2rem" }}>
        <Link to="/">NCI 25</Link>
      </div>

      {/* Hamburger Icon */}
      <div
        className="hamburger"
        style={{ marginRight: "2rem" }}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={toggleMenu}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/Teacher" onClick={toggleMenu}>
            Coordinators
          </Link>
        </li>
        <li>
          <Link to="/Schedule" onClick={toggleMenu}>
            Schedule
          </Link>
        </li>
        <li>
          <Link to="/DeveloperList" onClick={toggleMenu}>
            Developers
          </Link>
        </li>
        <li>
          <Link to="/gallery" onClick={toggleMenu}>
            Gallery
          </Link>
        </li>       
       <li>
        <button className="rule-button" onClick={handleDownload}>Download Rules</button>
      </li>
          <li>
          <Link to="/form" className="register-button" onClick={toggleMenu}>
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
