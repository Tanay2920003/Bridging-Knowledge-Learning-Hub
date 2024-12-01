import { useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import LandingPage from "./components/LandingPage";
import SkillsPage from "./components/SkillsPage";
import LearnPage from "./components/LearnPage";
import EventPage from "./components/EventPage";
import PreviousPapersPage from "./components/PreviousPapersPage";
import TasksPage from "./components/TasksPage";
import ProfilePage from "./components/ProfilePage";
import "./App.css";
import AppBar from './AppBar';

function App() {
    const vantaRef = useRef(null);
    const location = useLocation();
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const vantaEffect = window.VANTA.BIRDS({
            el: vantaRef.current,
            THREE: window.THREE,
            mouseControls: true,
            scale: 1.0,
            scaleMobile: 1.0,
            colorMode: "lerp",
            birdSize: 1.8,
            separation: 40.0,
            alignment: 45.0,
            quantity: 2.0,
        });

        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, []);

    const handleLogout = () => {
        navigate("/"); // Navigate back to the login page
    };

    // Automatically hide the dropdown menu after 3 seconds
    useEffect(() => {
        if (showMenu) {
            const timeout = setTimeout(() => {
                setShowMenu(false);
            }, 3000);

            return () => clearTimeout(timeout); // Cleanup timeout on component unmount or showMenu change
        }
    }, [showMenu]);

    return (
        <div ref={vantaRef} className="vanta-bg">
            <div className="content-container">
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/landing" element={<LandingPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/skills" element={<SkillsPage />} />
                    <Route path="/learn" element={<LearnPage />} />
                    <Route path="/event" element={<EventPage />} />
                    <Route path="/previous-papers" element={<PreviousPapersPage />} />
                    <Route path="/tasks" element={<TasksPage />} />
                </Routes>
            </div>

            {/* Profile Circle and Dropdown Menu */}
            {location.pathname !== "/" && location.pathname !== "/register" && (
                <>
                    <div className="profile-circle" onClick={() => setShowMenu(!showMenu)}>
                        <span className="profile-initial">S</span>
                    </div>

                    {/* Dropdown Menu */}
                    {showMenu && (
                        <div className="dropdown-menu">
                            <button onClick={() => navigate('/profile')} className="navigate-button">
                                Profile
                            </button>
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    )}
                </>
            )}
            <AppBar />

            {/* Bottom Navbar */}
            {location.pathname !== "/" && location.pathname !== "/register" && (
                <div className="bottom-navbar">
                    <a href="/landing" className="nav-link">Home</a>
                    <a href="/skills" className="nav-link">Skills</a>
                    <a href="/event" className="nav-link">Event</a>
                    <a href="/learn" className="nav-link">Learn</a>
                    <a href="/previous-papers" className="nav-link">PYQ</a>
                    <a href="/tasks" className="nav-link">Tasks</a>
                </div>
            )}
        </div>
    );
}

export default App;
