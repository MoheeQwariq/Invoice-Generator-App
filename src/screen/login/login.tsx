import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../../assets/logIn.svg";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import InputField from "../../components/inputField";
import { validateUser } from "../../utils/validation";

import {IUser} from "../../types";
import Logo from "../../assets/PayInvo.png";
import { useUserContext } from "../../provider/UserContext";

const Login = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useUserContext();

  const [user, setUser] = useState<IUser>({ email: "", password: "", name: "", phone: "", address: "" });
  const [errors, setErrors] = useState({ emailError: "", passwordError: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateUser(user);
    setErrors(validationErrors);

    if (!validationErrors.emailError && !validationErrors.passwordError) {
      const loggedInUser = state.users.find(
        (u) => u.email === user.email && u.password === user.password
      );

      if (loggedInUser) {
        dispatch({ type: "LOGIN", payload: loggedInUser });
        navigate("/CreateInvoice"); // Redirect after login
      } else {
        setErrors({
          emailError: "Invalid email",
          passwordError: "Invalid password",
        });
      }
    }
  };


  return (
    <div className="login-page">
      <div className="login-header">
        <img src={Logo} alt="Logo" className="header-logo" />
        <span className="header-text">PayInvo</span>
      </div>
      <div className="login-container">
        <div className="login-form">
          <div className="container">
            <form onSubmit={handleSubmit}>
              <h1>Login</h1>

              <InputField
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={user.email}
                onChange={handleChange}
                error={errors.emailError}
                icon={faEnvelope}
              />

              <InputField
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={user.password}
                onChange={handleChange}
                error={errors.passwordError}
                icon={faLock}
              />

              <button className="ButtonLogIn" type="submit">
                Login
              </button>
            </form>

            <p className="signup-text">
              Don't have an account?{" "}
              <span className="signup-link" onClick={() => navigate("/SignUp")}>
                Sign up
              </span>
            </p>
          </div>
        </div>
        <div className="login-image">
          <img src={Image} alt="Login" />
        </div>
      </div>
    </div>
  );
};
export default Login;
