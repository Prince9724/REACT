import React from 'react';
import { FiBook, FiCode, FiCalendar, FiAward, FiCpu, FiDatabase, FiLayout, FiZap, FiServer } from 'react-icons/fi';
import "./Education.css";

const Education = () => {
    const educationData = [
        {
            id: 1,
            icon: FiBook,
            title: "Higher Secondary Education (12th)",
            year: "2022 - 2024",
            description: "Completed my higher secondary education and discovered a strong interest in web technologies and programming.",
            achievements: ["Science Stream", "Computer Science"]
        },
        {
            id: 2,
            icon: FiCode,
            title: "Full Stack Web Development Course",
            year: "2024 - Present",
            description: "Currently learning Full Stack Web Development from Red & White Institute, Dindoli, Surat. Building modern web applications with industry-ready skills.",
            achievements: ["React.js", "JavaScript", "Next.js", "Node.js (Learning)"]
        }
    ];

    // Icon mapping for achievements
    const getAchievementIcon = (achievement) => {
        if (achievement.includes("Science")) return <FiCpu />;
        if (achievement.includes("Computer")) return <FiDatabase />;
        if (achievement.includes("React")) return <FiZap />;
        if (achievement.includes("Next")) return <FiLayout />;
        if (achievement.includes("Node")) return <FiServer />;
        return <FiAward />;
    };

    return (
        <section id="education" className="education">
            <div className="container education-container">
                {/* Section Header */}
                <div className="education-header">
                    <span className="education-badge">
                        My Journey
                    </span>
                    <h2>Education & Learning</h2>
                    <p className="education-subtitle">
                        My educational background and continuous learning journey in web development
                    </p>
                </div>

                {/* Education Cards */}
                <div className="education-grid">
                    {educationData.map((edu, index) => (
                        <div key={edu.id} className="education-card">
                            <div className="card-icon">
                                <edu.icon />
                            </div>
                            
                            <div className="card-content">
                                <div className="card-header">
                                    <h3>{edu.title}</h3>
                                    <div className="year-badge">
                                        <FiCalendar />
                                        <span>{edu.year}</span>
                                    </div>
                                </div>
                                
                                <p className="card-description">{edu.description}</p>
                                
                                <div className="achievements">
                                    <h4>Key Highlights:</h4>
                                    <div className="achievement-list">
                                        {edu.achievements.map((item, i) => (
                                            <span key={i} className="achievement-tag">
                                                {getAchievementIcon(item)}
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="card-number">
                                {String(index + 1).padStart(2, '0')}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;