import React from "react";
import "./navbar.component.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h3 className="TextStyle">New Invoice</h3>
   
      </div>

      <div className="navbar-right">
      <h3 className="TextStyle">PayInvo</h3>
      </div>
    </nav>
  );
};

export default Navbar;
