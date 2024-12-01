import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);

    const handleLogout = () => {
        navigate("/"); // Navigate back to the login page
    };

    return (
        <div className="landing-page">
            {/* Profile Circle */}
            <div className="profile-circle" onClick={() => setShowMenu(!showMenu)}>
                <span className="profile-initial">S</span> {/* Example initial */}
            </div>

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
