import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../../assets/logIn.svg";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import InputField from "../../components/inputField";
import { validateUser } from "../../utils/validation";
import { ILogin, IUser } from "../../types";

const Login = (props:ILogin) => {
  const navigate = useNavigate();
  const initialUser: IUser = { email: "", password: "" };
  const initialError = { emailError: "", passwordError: "" };
  const [user, setUser] = useState(initialUser);
  const [errors, setErrors] = useState(initialError);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateUser(user);
    setErrors(validationErrors);

    if (!validationErrors.emailError && !validationErrors.passwordError) {
      if (checkUserInLocalStorage(user)) {
        props.onLogin();
        navigate("/CreateInvoice");}
      else {
        setErrors({
          emailError: "Invalid email",
          passwordError: "Invalid password",
        });
   
      }
    }
  };


  const checkUserInLocalStorage = (user: IUser) => {
    const storedUsers = localStorage.getItem("users");

    if (!storedUsers) return false;

    const usersArray = JSON.parse(storedUsers);
    const existingUser = usersArray.find(
      (u: IUser) => u.email === user.email && u.password === user.password
    );
    if (existingUser) return true;
    return false;
  };

  return (
    <div className="login-page">
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

              <button className='ButtonLogIn' type="submit">Login</button>
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