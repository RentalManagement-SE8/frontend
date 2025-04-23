import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p>&copy; {new Date().getFullYear()} Rental Management System</p>
            </div>
        </footer>
    );
};

export default Footer;
