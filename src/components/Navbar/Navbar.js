import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [shrink, setShrink] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setShrink(true);
        } else {
            setShrink(false);
        }
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleDropdown = (e) => {
        e.stopPropagation();
        setDropdownOpen(!dropdownOpen);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${shrink ? 'visible' : ''}`}>
            <div className="navbar-container">
                <button className="menu-toggle" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                </button>
                <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
                    <li className="nav-item"><a href="/">Home</a></li>
                    <li className="nav-item dropdown" onClick={toggleDropdown}>
                        <a href="/">Activities</a>
                        <ul className={`dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
                            <li><a href="/activities/schoolcamp" onClick={(e) => e.stopPropagation()}>Epic Explorer</a>
                                               </li>
                            <li><a href=" /activities/adventureactivities " onClick={(e) => e.stopPropagation()}>Rising
                                Wanderer</a></li>
                            <li><a href="/activities/outdoorcamp" onClick={(e) => e.stopPropagation()}>Master
                                Pioneer</a></li>
                        </ul>
                    </li>
                    <li className="nav-item"><a href="/register">Register</a></li>
                    <li className="nav-item"><a href="/safety">Safety</a></li>
                    <li className="nav-item"><a href="/gallary">Gallary</a></li>
                    <li className="nav-item"><a href="/contact">Contact</a></li>
                    <li className="nav-item">
                        <a href="/login">
                            <button className="login-button">Log In</button>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
