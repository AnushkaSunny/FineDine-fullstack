import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Register.css";

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { register } = useAuth();

    const redirectTo = location.state?.from || "/";

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        terms: false,
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        const userData = {
            fullName: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            password: formData.password,
        };

        try {

            const response = await register(userData);

            alert(response.message);

            navigate(redirectTo, {replace: true});

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Registration failed."
            );

        }
    };

    return (
        <section className="register-page">

            <div className="register-container">

                <h1>Create Account</h1>

                <p>
                    Join FineDine and reserve tables, order food and enjoy
                    exclusive offers.
                </p>

                <form onSubmit={handleSubmit}>

                    <div className="register-row">

                        <div className="form-group">

                            <label>First Name</label>

                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="form-group">

                            <label>Last Name</label>

                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />

                        </div>

                    </div>

                    <div className="form-group">

                        <label>Email</label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="form-group">

                        <label>Phone Number</label>

                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="form-group">

                        <label>Password</label>

                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="form-group">

                        <label>Confirm Password</label>

                        <input
                            type={showPassword ? "text" : "password"}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <button
                        type="button"
                        className="show-password-btn"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? "Hide Password" : "Show Password"}
                    </button>

                    <div className="checkbox">

                        <input
                            type="checkbox"
                            name="terms"
                            checked={formData.terms}
                            onChange={handleChange}
                            required
                        />

                        <span>
                            I agree to the Terms & Conditions
                        </span>

                    </div>

                    <button
                        className="register-btn"
                        type="submit"
                    >
                        Register
                    </button>

                </form>

                <p className="login-link">

                    Already have an account?

                    <Link to="/login">
                        Login
                    </Link>

                </p>

            </div>

        </section>
    );
};

export default Register;