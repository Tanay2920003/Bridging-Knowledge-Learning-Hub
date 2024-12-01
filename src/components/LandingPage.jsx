import React from "react";
import { useNavigate } from "react-router-dom";
import './LandingPage.css';  // Import the CSS file for styling
import AppBar from '../AppBar';  // Import the AppBar component

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="landing-page">
            {/* Transparent AppBar */}
            <AppBar />

            {/* Main content wrapped in a container */}
            <div className="main-container">
                

                {/* Welcome and Insights Section */}
                <div className="form-container">
                    <h1 className="welcome-text">Welcome to BKL Hub!</h1>
                    <p className="sub-heading">Bridging Knowledge & Learning Hub</p>
                    <div className="service-info">
                        <p>Explore a wide range of study materials, previous papers, and tasks to help you excel in your studies. Connect with knowledge, explore opportunities, and learn with ease!</p>
                    </div>
                    <button className="explore-button">Explore Now</button>
                </div>

                {/* Additional Insights */}
                <div className="additional-insights">
                    <h2 className="insight-heading">What We Offer!</h2>

                    <div className="insight-box">
                        <h3 className="insight-subheading">Previous Papers</h3>
                        <p className="insight-text">
                            Access previous year's exam papers and get a better understanding of the exam patterns. These resources will help you prepare effectively and efficiently.
                        </p>
                    </div>

                    <div className="insight-box">
                        <h3 className="insight-subheading">Study Tasks</h3>
                        <p className="insight-text">
                            Take part in various study tasks that allow you to apply your knowledge. These tasks will not only enhance your learning but also give you practical insights into your subjects.
                        </p>
                    </div>

                    <div className="insight-box">
                        <h3 className="insight-subheading">Knowledge Sharing</h3>
                        <p className="insight-text">
                            Share your own study materials, notes, and insights with other students. Knowledge sharing is a great way to learn and help your peers at the same time.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
