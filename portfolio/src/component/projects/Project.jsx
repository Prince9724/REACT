import React from 'react'
import "./Project.css"

const Project = () => {
    const projects = [
        {
            id: 1,
            title: "Quiz App",
            description: "Interactive quiz app to test knowledge with multiple questions, instant feedback, score tracking, and fun learning.",
            image: "https://i.ytimg.com/vi/PBcqGxrr9g8/maxresdefault.jpg",
            github: "https://github.com/Prince9724/java-script/tree/main/quize",
            tech: "React, JavaScript"
        },
        {
            id: 2,
            title: "Weather App",
            description: "Real-time weather updates showing temperature, humidity, wind forecast with clean interface for quick daily planning.",
            image: "https://9to5mac.com/wp-content/uploads/sites/6/2023/04/Apple-Weather-app.jpg",
            github: "https://github.com/Prince9724/java-script/tree/main/API%26WEATHER/wether%20API",
            tech: "API, JavaScript"
        },
        {
            id: 3,
            title: "Task Manager",
            description: "Task manager app to organize daily tasks, set priorities, track progress, and improve productivity.",
            image: "https://images.squarespace-cdn.com/content/v1/5f95a2988b73fb2d14874ce3/1628545212710-X8BUBW4U2WTL36719HLM/Prod+Apps+Collage.png",
            github: "https://github.com/Prince9724/java-script/tree/main/final-practical-exam",
            tech: "JavaScript, CRUD"
        },
        {
            id: 4,
            title: "E-commerce Website",
            description: "E-commerce app for browsing products, adding to cart, secure checkout, and smooth online shopping experience.",
            image: "https://www.webicules.com/wp-content/uploads/2016/09/e-commerce-marketing-strategy-Webicules-Technology.png",
            github: "https://github.com/Prince9724/java-script/tree/main/day-37-api%20ecomerce",
            tech: "API, JavaScript"
        },
        {
            id: 5,
            title: "Todo App",
            description: "To-do app to add, manage, and track daily tasks easily for better productivity.",
            image: "https://foolishdeveloper.com/wp-content/uploads/2021/11/todo-list-javascript.jpg",
            github: "https://github.com/Prince9724/java-script/tree/main/day-23%20CRUD",
            tech: "JavaScript, CRUD"
        },
        {
            id: 6,
            title: "Portfolio",
            description: "Full-stack web developer portfolio showcasing projects, skills, experience, and contact information with modern design.",
            image: "https://static.resumegiants.com/wp-content/uploads/sites/25/2022/06/09105622/Professional-portfolio-736x414.webp",
            github: "https://prince9724.github.io/portfolio/",
            tech: "HTML, CSS, JavaScript"
        },
        {
            id: 7,
            title: "Utils Text",
            description: "Text Utils app to edit, format, and analyze text quickly with useful tools.",
            image: "https://user-images.githubusercontent.com/79099734/189593798-94357cb9-40ec-45e1-a9ae-78c364a0780f.png",
            github: "https://github.com/Prince9724/REACT/tree/main/03-utils-text",
            tech: "React.js"
        }
    ];

    return (
        <div id='project' className="projects-section">
            <div className='container'>
                <h3 className='projects-title'>Projects</h3>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className='project-card'>
                            <img className='project-image' src={project.image} alt={project.title} />
                            <div className='project-content'>
                                <h4>{project.title}</h4>
                                <p>{project.description}</p>
                                <div className='project-footer'>
                                    <span className='project-tech'>{project.tech}</span>
                                    <a href={project.github} className='project-btn' target='_blank' rel='noopener noreferrer'>
                                        View Code
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Project