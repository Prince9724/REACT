import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { FiUser, FiMail, FiMessageSquare, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'
import "./Contact.css"

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                "YOUR_PUBLIC_KEY"
            );

            setStatus({
                type: "success",
                message: "Message sent successfully!"
            });

            setFormData({
                name: "",
                email: "",
                message: ""
            });

        } catch (error) {
            setStatus({
                type: "error",
                message: "Failed to send message."
            });
        }

        setLoading(false);
    };

    return (
        <section id='contact' className="contact-section">
            <div className="container">
                <div className="contact-header">
                    <span className="contact-badge">Get In Touch</span>
                    <h2>Contact Me</h2>
                    <div className="contact-line"></div>
                    <p className="contact-subtitle">
                        Have a project in mind? Let's work together!
                    </p>
                </div>

                <div className="contact-wrapper">
                    {/* Left Side - Contact Info */}
                    <div className="contact-info">
                        <div className="info-card">
                            <div className="info-icon">
                                <FiUser />
                            </div>
                            <div className="info-content">
                                <h4>Name</h4>
                                <p>Prince Gond</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">
                                <FiMail />
                            </div>
                            <div className="info-content">
                                <h4>Email</h4>
                                <p>princegondrw123@gmail.com</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">
                                <FiPhone />
                            </div>
                            <div className="info-content">
                                <h4>Phone</h4>
                                <p>+91 9724672317</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">
                                <FiMapPin />
                            </div>
                            <div className="info-content">
                                <h4>Location</h4>
                                <p>India</p>
                            </div>
                        </div>

                        <div className="social-links-contact">
                            <h4>Follow Me</h4>
                            <div className="social-icons">
                                <a href="https://github.com/Prince9724" target="_blank" rel="noopener noreferrer">
                                    <FiGithub />
                                </a>
                                <a href="https://www.linkedin.com/in/prince-gond-69090b375/" target="_blank" rel="noopener noreferrer">
                                    <FiLinkedin />
                                </a>
                                <a href="https://www.instagram.com/prince.web__001/" target="_blank" rel="noopener noreferrer">
                                    <FiInstagram />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="contact-form-wrapper">
                        {status.message && (
                            <div className={`alert ${status.type}`}>
                                {status.message}
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">
                                    <FiUser />
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">
                                    <FiMail />
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">
                                    <FiMessageSquare />
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Write your message here..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-btn" disabled={loading}>
                                {loading ? (
                                    <>Sending...</>
                                ) : (
                                    <>
                                        <FiSend />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact