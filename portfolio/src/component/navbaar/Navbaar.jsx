import React from 'react'
import "../navbaar/Navbaar.css"

const Navbaar = () => {
    return (
        <nav className="navbar navbar-expand-lg custom-navbar sticky-top">
            <div className="container d-flex justify-content-between">

                <a className="navbar-brand logo" href="#">
                    Prince Gond
                </a>

                <div className="nav-links d-flex gap-4">
                    <a id='About' href="#home">Home</a>
                    <a href="#education">Education</a>
                    <a id='' href="#skill">Skill</a>
                    <a id='Project' href="#project">Project</a>
                    <a id='Contact' href="#contact">Contact</a>
                </div>

            </div>
        </nav>
    )
}

export default Navbaar