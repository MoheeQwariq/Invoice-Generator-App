import React from "react";
import "./navbar.component.css";
import {UilSearch, UilBell } from "@iconscout/react-unicons";
import user from "../../assets/user.png";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h3 className="TextStyle">New Invoice</h3>
   
      </div>

      <div className="navbar-right">
        <div className="search-box">
        <button className="icon-button">
          <UilSearch />
        </button>
        <div className="notification">
          <UilBell />
          <span className="badge">1</span>
        </div>
        </div>
        <img className="avatar" src={user} alt="User Avatar" />
      </div>
    </nav>
  );
};

export default Navbar;
