import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    // Registration logic (if any)
    alert("Registered successfully!");
    navigate("/");
  };

  const goToLogin = () => {
    navigate("/");
  };

  return (
    <div className="container">
      {/* Left Side - Image */}
      <div className="image-container">
        <img
          src="https://img.freepik.com/premium-vector/arrogant-people-looking-provocative-defiant-two-men-colliding-confronting-unpleasant-meeting-male-characters-with-tense-faces-colored-flat-vector-illustration-isolated-white-background_198278-15983.jpg"
          alt="Students"
          className="illustration"
        />
      </div>

      {/* Right Side - Register Form */}
      <div className="register-container">
        <div className="register-box">
          <h2 className="register-title">Create Account</h2>
          <p className="register-subtitle">Sign up for a student account</p>
          <form className="register-form" onSubmit={handleRegister}>
            <div className="input-group">
              {name === "" && <FontAwesomeIcon icon={faUser} className="input-icon" />}
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              {email === "" && <FontAwesomeIcon icon={faEnvelope} className="input-icon" />}
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              {password === "" && <FontAwesomeIcon icon={faLock} className="input-icon" />}
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className="register-button" type="submit">
              Register
            </button>
          </form>
          <p className="login-link">
            Already have an account?{" "}
            <span onClick={goToLogin} className="link">
              Login here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
