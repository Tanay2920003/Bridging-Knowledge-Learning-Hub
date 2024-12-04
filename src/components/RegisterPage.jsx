import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { supabase } from '../supabaseClient.js';  // Import the Supabase client

const RegisterPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");  // To store error messages
  const [isRegistered, setIsRegistered] = useState(false);  // To handle registration success state

  // Handle registration
  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");  // Reset error message

    try {
      // Attempt to create the user in Supabase
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        setError(error.message);  // Display error if there's an issue with registration
      } else {
        // If registration is successful, show the confirmation message
        setIsRegistered(true);
      }
    } catch (err) {
      setError("An error occurred: " + err.message);  // Catch any other unexpected errors
    }
  };

  const goToLogin = () => {
    navigate("/");  // Redirect to login page
  };

  const handleConfirmation = () => {
    navigate("/");  // Redirect to login page after confirmation
  };

  return (
      <div className="register-container">
        <div className="register-box">
          {isRegistered ? (
              // If registration is successful, show confirmation message
              <div>
                <h2>Check Your Email</h2>
                <p>A confirmation link has been sent to your email. Please check your inbox and confirm your account.</p>
                <button className="confirmed-button" onClick={handleConfirmation}>
                  Confirmed
                </button>
              </div>
          ) : (
              // Registration form is shown before successful registration
              <div>
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
                  <button className="register-button" type="submit">
                    Register
                  </button>
                </form>
                {error && <p className="error-message">{error}</p>} {/* Display error message */}
              </div>
          )}

          {/* Only show this part if the user is not on the confirmation page */}
          {!isRegistered && (
              <p className="login-link">
                Already have an account?{" "}
                <span onClick={goToLogin} className="link">
              Login here
            </span>
              </p>
          )}
        </div>
      </div>
  );
};

export default RegisterPage;
