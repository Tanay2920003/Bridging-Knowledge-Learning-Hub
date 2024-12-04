import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { supabase } from '../supabaseClient.js';  // Import the supabase client

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Check if the user is already logged in when the page loads
  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const { data: { user }, error } = await supabase.auth.getUser();
        console.log(user, error); // Debug log for user
        if (user) {
          navigate("/landing");  // Redirect to landing page if the user is already logged in
        }
      } catch (err) {
        console.error("Error fetching user:", err); // Catch any errors related to fetching user
      }
    };
    getCurrentUser();
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data: user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      console.log(user, error); // Debug log for login response

      if (error) {
        setError(error.message);  // Show error message if login fails
      } else {
        setError("");  // Clear error
        navigate("/landing");  // Redirect to landing page after successful login
      }
    } catch (err) {
      setError("An error occurred: " + err.message);  // Catch any unexpected errors
    }
  };

  return (
      <div className="login-container">
        <div className="login-box">
          <h2 className="login-title">Welcome</h2>
          <p className="login-subtitle">Log in to access your student account</p>
          <form className="login-form" onSubmit={handleLogin}>
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
