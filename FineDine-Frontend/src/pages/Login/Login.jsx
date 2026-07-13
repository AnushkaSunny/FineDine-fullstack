import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Login.css";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useAuth();

    const redirectTo = location.state?.from || "/";

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            console.log("Sending login request:", {
                email: formData.email,
                password: formData.password,
            });

            const response = await login({
                email: formData.email,
                password: formData.password,
            });

            console.log("Response:", response);
            alert(response.message);

            navigate(redirectTo, { replace: true });

        } catch (error) {



                console.log("Login error:", error.response);

                alert(
                    error.response?.data?.message ||
                    "Invalid email or password."
                );
            }


    };

    return (
        <section className="login-page">

            <div className="login-container">

                <h1>Welcome Back</h1>

                <p>
                    Login to continue your FineDine experience.
                </p>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">

                        <label>Email</label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="form-group">

                        <label>Password</label>

                        <div className="password-box">

                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />

                            <button
                                type="button"
                                className="show-btn"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>

                        </div>

                    </div>

                    <div className="login-options">

                        <label>
                            <input type="checkbox" />
                            Remember Me
                        </label>

                        <a href="/">Forgot Password?</a>

                    </div>

                    <button
                        type="submit"
                        className="login-btn"
                    >
                        Login
                    </button>

                </form>

                <p className="register-link">

                    Don't have an account?

                    <Link to="/register">
                        Register
                    </Link>

                </p>

            </div>

        </section>
    );
};

export default Login;