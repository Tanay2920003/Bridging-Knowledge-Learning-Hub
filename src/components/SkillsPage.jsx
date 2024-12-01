import React, { useState } from 'react';
import './SkillsPage.css';

const skillsList = [
    { id: 1, name: "JavaScript", description: "A versatile programming language commonly used for web development.", link: "https://www.google.com" },
    { id: 2, name: "Python", description: "A powerful, high-level language used for web development, data science, and more.", link: "https://www.google.com" },
    { id: 3, name: "React", description: "A JavaScript library for building user interfaces.", link: "https://www.google.com" },
    { id: 4, name: "Node.js", description: "A JavaScript runtime used for building scalable server-side applications.", link: "https://www.google.com" },
    { id: 5, name: "Django", description: "A high-level Python web framework that encourages rapid development.", link: "https://www.google.com" },
    { id: 6, name: "CSS", description: "A style sheet language used for describing the presentation of web pages.", link: "https://www.google.com" },
    { id: 7, name: "HTML", description: "The standard markup language for creating web pages.", link: "https://www.google.com" },
    { id: 8, name: "Machine Learning", description: "A subset of AI that allows systems to learn from data and improve performance over time.", link: "https://www.google.com" },
    { id: 9, name: "Data Analysis", description: "The process of inspecting, cleaning, and modeling data to discover useful information.", link: "https://www.google.com" },
    { id: 10, name: "Cloud Computing", description: "The delivery of computing services like servers, storage, and databases over the internet.", link: "https://www.google.com" },
];

const SkillsPage = () => {
    const [favorites, setFavorites] = useState([]);
    const [marked, setMarked] = useState([]);

    const toggleFavorite = (id) => {
        setFavorites((prev) =>
            prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
        );
    };

    const toggleMark = (id) => {
        setMarked((prev) =>
            prev.includes(id) ? prev.filter((markId) => markId !== id) : [...prev, id]
        );
    };

    const favoriteSkills = skillsList.filter((skill) => favorites.includes(skill.id));
    const nonFavoriteSkills = skillsList.filter((skill) => !favorites.includes(skill.id));

    return (
        <div className="skills-page">
            <h1>Skills</h1>
            <p>Develop Skills and Make Projects</p>

            {/* Favorites Section */}
            {favoriteSkills.length > 0 && (
                <div className="favorites-section">
                    <h2>Favorites</h2>
                    <div className="separator"></div>
                    <div className="skills-list">
                        {favoriteSkills.map((skill) => (
                            <div key={skill.id} className="skill-item">
                                <div className="skill-header">
                                    <span className="skill-name">{skill.name}</span>
                                    <div className="skill-actions">
                                        <button
                                            className={`action-button ${
                                                favorites.includes(skill.id) ? 'favorite' : ''
                                            }`}
                                            onClick={() => toggleFavorite(skill.id)}
                                        >
                                            {favorites.includes(skill.id) ? '★ Favorite' : '☆ Favorite'}
                                        </button>
                                        <button
                                            className={`action-button ${
                                                marked.includes(skill.id) ? 'marked' : ''
                                            }`}
                                            onClick={() => toggleMark(skill.id)}
                                        >
                                            {marked.includes(skill.id) ? '✔ Completed' : 'Mark as Complete'}
                                        </button>
                                    </div>
                                </div>
                                <p className="skill-description">{skill.description}</p>
                                <a
                                    href={skill.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="learn-more-button"
                                >
                                    Learn More
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Non-Favorite Skills Section */}
            <div className="skills-list">
                {nonFavoriteSkills.map((skill) => (
                    <div key={skill.id} className="skill-item">
                        <div className="skill-header">
                            <span className="skill-name">{skill.name}</span>
                            <div className="skill-actions">
                                <button
                                    className={`action-button ${
                                        favorites.includes(skill.id) ? 'favorite' : ''
                                    }`}
                                    onClick={() => toggleFavorite(skill.id)}
                                >
                                    {favorites.includes(skill.id) ? '★ Favorite' : '☆ Favorite'}
                                </button>
                                <button
                                    className={`action-button ${
                                        marked.includes(skill.id) ? 'marked' : ''
                                    }`}
                                    onClick={() => toggleMark(skill.id)}
                                >
                                    {marked.includes(skill.id) ? '✔ Completed' : 'Mark as Complete'}
                                </button>
                            </div>
                        </div>
                        <p className="skill-description">{skill.description}</p>
                        <a
                            href={skill.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="learn-more-button"
                        >
                            Learn More
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsPage;
