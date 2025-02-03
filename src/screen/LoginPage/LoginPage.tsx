import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faPhone, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './LoginPage.css';
import { validateForm } from "../../utils/validation";
import AccountImage from '../../assets/Account-rafiki.svg';

type FormData = {
    name: string;
    email: string;
    password: string;
    phone: string;
};

const SignUp = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: '',
        phone: '',
    });

    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: validateForm({ ...formData, [name]: value })[name] }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formErrors = validateForm(formData);
        setErrors(formErrors);

        if (Object.values(formErrors).every((error) => !error)) {
            console.log("Form is valid, proceed with sign-up.");

            const users: FormData[] = JSON.parse(localStorage.getItem("users") || "[]");

            if (users.some((user) => user.email === formData.email)) {
                console.log("This email is already registered.");
                setErrors((prev) => ({ ...prev, email: "Email already in use" }));
                setIsSubmitting(false);
                return;
            }

            users.push(formData);
            localStorage.setItem("users", JSON.stringify(users));

            console.log("User registered successfully.");
            //هاد السطر سنقوم باستبداله بالصفحة الرئيسية لاحقا لينتقل عليها لكن بشكل مؤقت جعلته يذهب الى هذه الصفحة الافتراضية من رياكت
            navigate("/welcome", { state: { user: formData } });
        } else {
            console.log("Form contains errors.");
        }

        setIsSubmitting(false);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="sign-up-container">
            <div className="sign-up-form">
                <h1>Create new account</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <FontAwesomeIcon icon={faUser} className="icon" />
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <p className="error">{errors.name}</p>}
                    </div>
                    <div className="form-group">
                        <FontAwesomeIcon icon={faEnvelope} className="icon" />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="form-group">
                        <FontAwesomeIcon icon={faLock} className="icon" />
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <span className="toggle-password" onClick={togglePasswordVisibility}>
                            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                        </span>
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <div className="form-group">
                        <FontAwesomeIcon icon={faPhone} className="icon" />
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        {errors.phone && <p className="error">{errors.phone}</p>}
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Signing Up..." : "Sign Up"}
                    </button>
                </form>
            </div>
            <div className="sign-up-image">
                <img src={AccountImage} alt="Sign Up" />
            </div>
        </div>
    );
};

export default SignUp;