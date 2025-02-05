import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { faUser, faEnvelope, faLock, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import "./signUp.css"
import { validateForm } from "../../utils/validation";
import AccountImage from '../../assets/account-rafiki.svg';
import InputField from "../../components/inputField/InputField";
import { FormData } from "../../types";
const SignUp = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: '',
        phone: '',
        address: '', 
    });

    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
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
            navigate("/welcome", { state: { user: formData } });
        } else {
            console.log("Form contains errors.");
        }

        setIsSubmitting(false);
    };

    return (
        <div className="sign-up-container">
            <div className="sign-up-form">
                <h1>Create new account</h1>
                <form onSubmit={handleSubmit}>
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