import React from "react";
import { IButton } from "../../types/types";
import "./CustomButton.css"; // Import CSS file

const CustomButton: React.FC<IButton> = ({ icon, text, onClick, className }) => {
  return (
    <button className={`custom-button ${className || "default-bg"}`} onClick={onClick}>
      <img className="button-icon" src={typeof icon === "string" ? icon : undefined} alt={text} />
      <span className="button-text">{text}</span>
    </button>
  );
};

export default CustomButton;
