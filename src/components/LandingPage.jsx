import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();
    const location = useLocation(); // Get current location
    const [showMenu, setShowMenu] = useState(false);

    const handleLogout = () => {
        navigate("/"); // Navigate back to the login page
    };

    // Check if the current page is either login or register to exclude the profile circle
    const shouldShowProfileCircle = !["/", "/register"].includes(location.pathname);

    return (
        <div className="landing-page">
            {/* Profile Circle (conditionally rendered) */}
            {shouldShowProfileCircle && (
                <div className="profile-circle" onClick={() => setShowMenu(!showMenu)}>
                    <span className="profile-initial">S</span> {/* Example initial */}
                </div>
            )}

            {/* Dropdown Menu */}
            {showMenu && (
                <div className="dropdown-menu">
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}

            {/* Main Content */}
            <div className="content-container">
                <div className="form-container">
                    <h1 className="welcome-text">Welcome to Your Dashboard!</h1>
                    {/* Other landing page content */}
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
