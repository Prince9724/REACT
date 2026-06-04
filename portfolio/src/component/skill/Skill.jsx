import React from 'react'
import "./skill.css"

const Skill = () => {
    return (
        <div id='skill' className='skills-section'>
            <div className='skills-container'>
                <div className='skills-header'>
                    <span className='skills-badge'>My Expertise</span>
                    <h3 className='skills-title'>Skills</h3>
                    <div className='skills-line'></div>
                </div>
                
                <div className='skills-grid'>
                    <div className='skill-box'>
                        <h4>C</h4>
                    </div>
                    <div className='skill-box'>
                        <h4>HTML</h4>
                    </div>
                    <div className='skill-box'>
                        <h4>CSS</h4>
                    </div>
                    <div className='skill-box'>
                        <h4>Bootstrap</h4>
                    </div>
                    <div className='skill-box'>
                        <h4>Media Query</h4>
                    </div>
                    <div className='skill-box'>
                        <h4>JavaScript</h4>
                    </div>
                    <div className='skill-box'>
                        <h4>React</h4>
                    </div>
                    <div className='skill-box'>
                        <h4>Tailwind</h4>
                    </div>
                </div>
                
                <hr className='skills-hr' />
            </div>
        </div>
    )
}

export default Skill