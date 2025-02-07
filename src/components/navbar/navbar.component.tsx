import React from "react";
import "./navbar.component.css";
import user from "../../assets/user.png";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h3 className="TextStyle">New Invoice</h3>
   
      </div>

      <div className="navbar-right">
        <img className="avatar" src={user} alt="User Avatar" />
      </div>
    </nav>
  );
};

export default Navbar;
