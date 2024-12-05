import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

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
      setError("");
      navigate("/landing");
    } else {
      setError("Invalid email or password!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Welcome</h2>
        <p className="login-subtitle">Log in to access your student account</p>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            {email === "" && (
              <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
            )}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            {password === "" && (
              <FontAwesomeIcon icon={faLock} className="input-icon" />
            )}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="login-button" type="submit">
            Log In
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
        <p className="register-link">
          New user?{" "}
          <span onClick={() => navigate("/register")} className="link">
            Register here
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
