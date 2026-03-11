import React from 'react'
import "./Education.css"

const Education = () => {
    return (
        <div className=' education-section container-fluid'>
            <div className=' container text-center'>

                <h3 className='education-title'>Education</h3>

                <div className='education-card'>
                    <h4>Higher Secondary Education (12th)</h4>
                    <h6>
                        Completed my higher secondary education and discovered
                        a strong interest in web technologies and programming.
                    </h6>
                </div>

                <div className='education-card'>
                    <h4>Self-Learning Journey in Web Development</h4>
                    <h6>
                        Started learning Frontend Web Development after 12th.
                        I focus on building responsive and modern user interfaces
                        using HTML, CSS, JavaScript, Bootstrap, and React.
                    </h6>
                </div>

                <hr className='education-line' />

            </div>
        </div>
    )
}

export default Education