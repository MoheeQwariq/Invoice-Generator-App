import { Errors, IUser } from "../types/types";

export const validateForm = (data: { [key: string]: string }) => {
  const errors: Errors = {
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  };

  // Name validation
  if (!data.name) {
    errors.name = "Name is required";
  }

  // Email validation
  if (!data.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email is invalid";
  }

  // Password validation
  if (!data.password) {
    errors.password = "Password is required";
  } else if (data.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  // Phone validation
  if (!data.phone) {
    errors.phone = "Phone number is required";
  } else if (!/^\d{10}$/.test(data.phone)) {
    errors.phone = "Phone number is invalid";
  }

  // Address validation
  if (!data.address) {
    errors.address = "Address is required";
  }

  return errors;
};

export const validateUser = (user: IUser) => {
    const errors = {
      emailError: "",
      passwordError: "",
    };
    if (!user.email)
        errors.emailError = "Email is required";

    if (!user.password)
        errors.passwordError = "password is required";

    

    return errors;
};
