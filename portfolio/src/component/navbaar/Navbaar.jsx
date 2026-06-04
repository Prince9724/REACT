import React, { useState, useEffect } from 'react';
import { FiHome, FiBookOpen, FiCpu, FiFolder, FiMail, FiDownload, FiSun, FiMoon } from 'react-icons/fi';
import "../navbaar/Navbaar.css";

const Navbaar = ({ toggleTheme, theme }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <nav className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="nav-wrapper">
                    {/* Logo Section */}
                    <a className="logo" href="#home" onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('home');
                    }}>
                        <span className="logo-bracket">&lt;</span>
                        <span className="logo-text">Prince Gond</span>
                        <span className="logo-bracket">/&gt;</span>
                        <span className="logo-dot"></span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                        <button onClick={() => scrollToSection('home')} className="nav-link">
                            <FiHome className="nav-icon" />
                            <span>Home</span>
                        </button>
                        <button onClick={() => scrollToSection('education')} className="nav-link">
                            <FiBookOpen className="nav-icon" />
                            <span>Education</span>
                        </button>
                        <button onClick={() => scrollToSection('skill')} className="nav-link">
                            <FiCpu className="nav-icon" />
                            <span>Skills</span>
                        </button>
                        <button onClick={() => scrollToSection('project')} className="nav-link">
                            <FiFolder className="nav-icon" />
                            <span>Projects</span>
                        </button>
                        <button onClick={() => scrollToSection('contact')} className="nav-link">
                            <FiMail className="nav-icon" />
                            <span>Contact</span>
                        </button>
                    </div>

                    {/* Right Side Actions */}
                    <div className="nav-actions">
                        {/* Theme Toggle Button */}
                        <button 
                            className="theme-toggle" 
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? <FiSun /> : <FiMoon />}
                        </button>

                        {/* Resume Button */}
                        <button 
                            className="resume-btn"
                            onClick={() => window.open('#', '_blank')}
                        >
                            Resume
                            <FiDownload />
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button 
                            className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbaar;