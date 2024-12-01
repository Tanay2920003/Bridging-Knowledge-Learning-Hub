import React, { useState } from 'react';
import './SkillsPage.css';

const skillsList = [
    { id: 1, name: "Learn AI Hands-On - PyTorch", description: "A versatile programming language commonly used for web development.", link: "https://cognitiveclass.ai/learn/learn-ai-hands-on-pytorch", image: "https://curator-production.s3.us.cloud-object-storage.appdomain.cloud/uploads/Data%20Augmentation.png" },
    { id: 2, name: "Computer Vision Hands On With PyTorch", description: "A powerful, high-level language used for web development, data science, and more.", link: "https://cognitiveclass.ai/learn/computer-vision-hands-on-with-pytorch", image: "https://curator-production.s3.us.cloud-object-storage.appdomain.cloud/uploads/md5-636b6ab702415fecb67078a9790433a3-course_card.png" },
    { id: 3, name: "SQL and Relational Databases 101", description: "A JavaScript library for building user interfaces.", link: "https://cognitiveclass.ai/courses/learn-sql-relational-databases", image: "https://curator-production.s3.us.cloud-object-storage.appdomain.cloud/uploads/md5-b2bb7c024cf1568c1a838db057f0cb3d-course_card.png" },{ id: 4, name: "Data Analysis with Python", description: "A JavaScript library for building user interfaces.", link: "https://cognitiveclass.ai/courses/data-analysis-python", image: "https://curator-production.s3.us.cloud-object-storage.appdomain.cloud/uploads/course-v1:IBMSkillsNetwork+DA0101EN+v1.png" },{ id: 5, name: "Docker Essentials: A Developer Introduction", description: "A JavaScript library for building user interfaces.", link: "https://cognitiveclass.ai/courses/chatbot-course", image: "https://curator-production.s3.us.cloud-object-storage.appdomain.cloud/uploads/course-v1:IBM+CO0101EN+v1.png" },{ id: 6, name: "Getting started with Linux Terminal Commands", description: "A JavaScript library for building user interfaces.", link: "https://cognitiveclass.ai/courses/getting-started-with-linux-terminal-commands", image: "https://curator-production.s3.us.cloud-object-storage.appdomain.cloud/uploads/md5-af8c0de006be81f95b27eb4c7f65d2f0-course_card.jpeg" },{ id: 7, name: "Monitor Water Levels and Soil Moisture with Geospatial APIs", description: "A JavaScript library for building user interfaces.", link: "https://cognitiveclass.ai/courses/monitor-water-levels-and-soil-moisture-with-geospatial-apis", image: "https://curator-production.s3.us.cloud-object-storage.appdomain.cloud/uploads/course-v1:IBMSkillsNetwork+GPXX0VPBEN+v1.png" },
    // Add image URLs for other skills
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

    return (
        <div className="skills-page">
            <h1>Skills</h1>
            <p>Develop Skills and Make Projects</p>

            <div className="skills-list">
                {skillsList.map((skill) => (
                    <div key={skill.id} className="skill-item">
                        <img src={skill.image} alt={skill.name} className="skill-image" />
                        <div className="skill-header">
                            <span className="skill-name">{skill.name}</span>
                        </div>
                        <p className="skill-description">{skill.description}</p>
                        <div className="skill-actions">
                            <button
                                className={`action-button ${favorites.includes(skill.id) ? 'favorite' : ''}`}
                                onClick={() => toggleFavorite(skill.id)}
                            >
                                {favorites.includes(skill.id) ? '★ Favorite' : '☆ Favorite'}
                            </button>
                            <button
                                className={`action-button ${marked.includes(skill.id) ? 'marked' : ''}`}
                                onClick={() => toggleMark(skill.id)}
                            >
                                {marked.includes(skill.id) ? '✔ Completed' : 'Mark as Complete'}
                            </button>
                        </div>
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
