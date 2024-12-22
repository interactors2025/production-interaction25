import  { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logoI">
        <Link to="/">INTERACTION</Link>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
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
            About
          </Link>
        </li>
        <li>
          <Link to="/Schedule" onClick={toggleMenu}>
            Schedule
          </Link>
        </li>
        <li>
          <Link to="/coordinator" onClick={toggleMenu}>
            Coordinator
          </Link>
        </li>
        <li>
          <Link to="/Teacher" onClick={toggleMenu}>
            Teachers
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
          <Link to="/form" className="register-button" onClick={toggleMenu}>
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
