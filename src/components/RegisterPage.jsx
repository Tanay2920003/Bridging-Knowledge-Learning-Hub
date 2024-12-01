import React from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        // Logic for registration (if any)
        alert("Registered successfully!");
        navigate("/");
    };

    const goToLogin = () => {
        navigate("/");
    };

    return (
        <div className="form-container">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Gmail" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Register</button>
            </form>
            <p>
                Already have an account?{" "}
                <span onClick={goToLogin} className="link">
          Login here
        </span>
            </p>
        </div>
    );
};

export default RegisterPage;
