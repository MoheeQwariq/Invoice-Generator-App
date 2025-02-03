type Errors = {
    [key: string]: string;
    name: string;
    email: string;
    password: string;
    phone: string;
};

export const validateForm = (data: { [key: string]: string }) => {
    const errors: Errors = {
        name: '',
        email: '',
        password: '',
        phone: ''
    };

    // Name validation
    if (!data.name) {
        errors.name = 'Name is required';
    }

    // Email validation
    if (!data.email) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = 'Email is invalid';
    }

    // Password validation
    if (!data.password) {
        errors.password = 'Password is required';
    } else if (data.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
    }

    // Phone validation
    if (!data.phone) {
        errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(data.phone)) {
        errors.phone = 'Phone number is invalid';
    }

    return errors;
};