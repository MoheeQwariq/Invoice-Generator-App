import React from "react";
import "./navbar.css";
import AppIcon from "../../assets/PayInvo.png"
const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h3 className="TextStyle">New Invoice</h3>
      </div>
      <div className="navbar-right">
        <img src={AppIcon} alt="App Icon" className="logo" />
      </div>
    </nav>
  );
};

export default Navbar;