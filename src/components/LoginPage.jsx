import React, { useState } from "react";
import "./LoginPage.css"; // Make sure to create the CSS file for styling.

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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

      {/* Right Side - Login Form */}
      <div className="login-container">
        <h1>Student Login</h1>
        <form>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your Email"
          />

          <label htmlFor="password">Password</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
            />
            <span
              className="toggle-password"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <button type="submit" className="login-button">
            Log In
          </button>

          {/* New User Link */}
          <h4>New User? <a href="/register" className="new-user-link">
             Register Here
          </a></h4>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
