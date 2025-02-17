import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  faUser,
  faEnvelope,
  faLock,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./signUp.css";
import { validateForm } from "../../utils/validation";
import AccountImage from "../../assets/signup.svg";
import InputField from "../../components/inputField";
import Logo from "../../assets/PayInvo.png";
import { IUser } from "../../types";
import { useUserContext } from "../../provider";


const SignUp = () => {
  const { state, dispatch } = useUserContext();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<IUser>({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const [errors, setErrors] = useState<Partial<IUser>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateForm({ ...formData, [name]: value })[name],
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.values(validationErrors).every((error) => !error)) {
      if (state.users.some((user) => user.email === formData.email)) {
        setErrors((prev) => ({ ...prev, email: "Email already in use" }));
        return;
      }

      dispatch({ type: "ADD_USER", payload: formData });
      dispatch({ type: "LOGIN", payload: formData });
      navigate("/CreateInvoice");
    }
  };

  return (
    <div className="sign-up-page">
      <div className="login-header">
        <img src={Logo} alt="Logo" className="header-logo" />
        <span className="header-text">PayInvo</span>
      </div>
      <div className="sign-up-container">
        <div className="sign-up-form">
          <div className="container">
            <form onSubmit={handleSubmit}>
              <h1>Create new account</h1>
              <InputField
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                icon={faUser}
              />
              <InputField
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                icon={faEnvelope}
              />
              <InputField
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
                icon={faLock}
              />
              <InputField
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
                icon={faPhone}
              />
              <InputField
                type="text"
                id="address"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                error={errors.address}
                icon={faMapMarkerAlt}
              />
              <button type="submit" className="ButtonSignup">
                Sign Up
              </button>
            </form>

            <p className="signup-text">
              Already have an account?{" "}
              <span className="signup-link" onClick={() => navigate("/Login")}>
                Log in
              </span>
            </p>
          </div>
        </div>
        <div className="sign-up-image">
          <img src={AccountImage} alt="Sign Up" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
