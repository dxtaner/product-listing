import React from 'react';
import { FaHome, FaBox, FaEnvelope } from 'react-icons/fa'; 
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <a href="/">
                    <h1>Hyper Techs</h1>
                </a>
            </div>
            <nav className="nav-links">
                <ul>
                    <li>
                        <a href="#home">
                            <FaHome className="icon" />
                            Ana Sayfa
                        </a>
                    </li>
                    <li>
                        <a href="#products">
                            <FaBox className="icon" />
                            Ürünler
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            <FaEnvelope className="icon" />
                            İletişim
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
