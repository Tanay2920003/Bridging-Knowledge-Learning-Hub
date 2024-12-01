import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();

    // Temporary credentials
    const TEMP_EMAIL = "test@example.com";
    const TEMP_PASSWORD = "password123";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === TEMP_EMAIL && password === TEMP_PASSWORD) {
            setError(""); // Clear any previous errors
            navigate("/landing"); // Navigate to the landing page
        } else {
            setError("Invalid email or password!");
        }
    };

    return (
        <div className="form-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Gmail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <p>
                New user?{" "}
                <span onClick={() => navigate("/register")} className="link">
          Register here
        </span>
            </p>
        </div>
    );
};

export default LoginPage;
