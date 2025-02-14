import React from "react";
import "./navbar.css";
import AppIcon from "../../assets/PayInvo.png"
import { useLocation } from "react-router-dom";
const Navbar: React.FC = () => {
  const location = useLocation();

  const getTitle = () => {
    if (location.pathname === "/CreateInvoice") {
      return "New Invoice";
    } else if (location.pathname === "/CardList") {
      return "All Invoices";
    }
    return "";
  };
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h3 className="TextStyle">{getTitle()}</h3>
      </div>
      <div className="navbar-right">
        <img src={AppIcon} alt="App Icon" className="logo" />
      </div>
    </nav>
  );
};

export default Navbar;