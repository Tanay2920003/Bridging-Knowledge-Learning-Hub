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
import PrivateRoute from "./components/PrivateRoute";  // Import PrivateRoute
import AppBar from './AppBar';
import { supabase } from './supabaseClient';  // Import Supabase client
import "./App.css";

function App() {
    const vantaRef = useRef(null);
    const location = useLocation();
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    // Check for user session on load and listen for auth state changes
    useEffect(() => {
        // Fetch the current session from localStorage or sessionStorage
        const getSession = async () => {
            const { data: session, error } = await supabase.auth.getSession();  // Fetch the current session
            if (error) {
                console.error('Error fetching session:', error);
                setUser(null);  // Reset user state on error
                return;
            }
            setUser(session?.user || null);  // Set user if session is available
        };

        getSession();  // Call the function to set user session

        // Listen for auth state changes and update user state accordingly
        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            setUser(session?.user || null);  // Update user state on auth state change
        });

        // Cleanup function to unsubscribe the listener
        return () => {
            if (authListener?.unsubscribe) {
                authListener.unsubscribe();  // Ensure this exists before calling unsubscribe
            }
        };
    }, []);  // Empty dependency array ensures this effect only runs once

    // Initialize Vanta effect
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

    // Handle Logout
    const handleLogout = async () => {
        await supabase.auth.signOut();  // Sign out using Supabase
        navigate("/");  // Redirect to login page after logout
    };

    // Automatically hide the dropdown menu after 3 seconds
    useEffect(() => {
        if (showMenu) {
            const timeout = setTimeout(() => {
                setShowMenu(false);
            }, 3000);

            return () => clearTimeout(timeout);  // Cleanup timeout on component unmount or showMenu change
        }
    }, [showMenu]);

    return (
        <div ref={vantaRef} className="vanta-bg">
            <div className="content-container">
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />

                    {/* Protect Routes */}
                    <Route
                        path="/landing"
                        element={<PrivateRoute user={user}><LandingPage /></PrivateRoute>}
                    />
                    <Route
                        path="/profile"
                        element={<PrivateRoute user={user}><ProfilePage /></PrivateRoute>}
                    />
                    <Route
                        path="/skills"
                        element={<PrivateRoute user={user}><SkillsPage /></PrivateRoute>}
                    />
                    <Route
                        path="/learn"
                        element={<PrivateRoute user={user}><LearnPage /></PrivateRoute>}
                    />
                    <Route
                        path="/event"
                        element={<PrivateRoute user={user}><EventPage /></PrivateRoute>}
                    />
                    <Route
                        path="/previous-papers"
                        element={<PrivateRoute user={user}><PreviousPapersPage /></PrivateRoute>}
                    />
                    <Route
                        path="/tasks"
                        element={<PrivateRoute user={user}><TasksPage /></PrivateRoute>}
                    />
                </Routes>
            </div>

            {/* Profile Circle and Dropdown Menu */}
            {location.pathname !== "/" && location.pathname !== "/register" && user && (
                <>
                    <div className="profile-circle" onClick={() => setShowMenu(!showMenu)}>
                        <span className="profile-initial">{user?.email?.[0].toUpperCase()}</span>
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
            {location.pathname !== "/" && location.pathname !== "/register" && user && (
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
