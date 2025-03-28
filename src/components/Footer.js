import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear(); 

    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="best-offer-text">En İyi Tekliflere Şimdi Ulaş!</p>
                <div className="social-links">
                    <a href="#facebook" className="social-icon"><FaFacebook /></a>
                    <a href="#twitter" className="social-icon"><FaTwitter /></a>
                    <a href="#instagram" className="social-icon"><FaInstagram /></a>
                </div>
                <p>&copy; {currentYear} Tüm Hakları Saklıdır.</p>
            </div>
        </footer>
    );
}

export default Footer;
