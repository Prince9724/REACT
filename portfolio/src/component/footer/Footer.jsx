// Footer.jsx - Without External CSS
import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    const footerStyles = {
        background: 'linear-gradient(135deg, #0f172a, #1e293b)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    };
    
    const contentStyles = {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem'
    };
    
    const textStyles = {
        color: '#94a3b8',
        fontSize: '0.9rem',
        margin: '0.5rem 0'
    };
    
    return (
        <footer style={footerStyles}>
            <div style={contentStyles}>
                <p style={textStyles}>© {currentYear} Prince Gond. All rights reserved.</p>
                <p style={textStyles}>Built with React & ❤️</p>
            </div>
        </footer>
    );
};

export default Footer;