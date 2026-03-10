import React from 'react'
import "../hero/Hero.css"
const Hero = () => {
    return (
        <>
            <div className='hero container-fluid'>
                <div className=' container d-flex flex-column align-items-center'>
                    <div className='d-flex justify-content-around p-3 mb-5'>

                        <div className='w-50'>
                            <div className=' text-center'>
                                <h2 className='text-start mt-3'>Prince Gond</h2>
                                <h3 className= 'skill-name text-start m-3'> Full Stack Web Developer</h3>
                            </div>
                            <p className='font-family: "Inter", sans-serif;'>
                                Hi, I'm <b>Prince Gond</b> a passionate  Frontend <b>Web Developer </b>who enjoys creating modern,
                                responsive, and user-friendly websites. I love turning ideas into beautiful interfaces using
                                technologies like **HTML, CSS, JavaScript, Bootstrap, and React**. I am constantly learning
                                and improving my skills to build better web experiences.

                            </p>
                        </div>
                        <div className='hero-img border border-3 border-primary rounded-circle mt-5' style={{ height: 200, width: 200 }}>
                            <img className=' rounded-circle ' style={{ height: 196, width: 196 }} src="../hero/assets/img-2.jpeg" alt="" />
                        </div>



                    </div>
                    <div className='d-flex justify-content-around w-100'>
                        <div className='text-center'>
                            <h3>16+</h3>
                            <p>Projects</p>
                        </div>
                        <div className='text-center'>
                            <h3>8+</h3>
                            <p>Computer Language</p>
                        </div>
                        <div className='text-center'>
                            <h3>6+</h3>
                            <p>Practice Time</p>
                        </div>
                        <div className='text-center'>
                            <h3>1</h3>
                            <p>Participate Comptition</p>
                        </div>

                    </div>
                    <hr className="  bg-danger mb-5 w-100" style={{ height: "3px" }} />
                </div>
            </div>

        </>
    )
}

export default Hero