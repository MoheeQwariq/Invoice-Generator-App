import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./InputField.css";
import { InputFieldProps } from "../../types";

const InputField: React.FC<InputFieldProps> = ({
  type,
  id,
  name,
  placeholder,
  value,
  onChange,
  error,
  icon,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="form-group">
      {icon && <FontAwesomeIcon icon={icon} className="icon" />}
      <input
        type={type === "password" && showPassword ? "text" : type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {type === "password" && (
        <span className="toggle-password" onClick={togglePasswordVisibility}>
          <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
        </span>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default InputField;
