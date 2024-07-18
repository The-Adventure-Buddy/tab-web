import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
                    <li className="nav-item"><Link to="">Home</Link></li>
                    <li className="nav-item"><Link to="/about">About</Link></li>
                    <li className="nav-item dropdown" onClick={toggleDropdown}>
                        <Link to="/">Activities</Link>
                        <ul className={`dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
                            <li><Link to="/activities/schoolcamp" onClick={(e) => e.stopPropagation()}>School Camp</Link></li>
                            <li><Link to="/activities/outdoorcamp" onClick={(e) => e.stopPropagation()}>Outdoor Camp</Link></li>
                            <li><Link to="/activities/adventureactivities" onClick={(e) => e.stopPropagation()}>Adventure Activities</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item"><Link to="/register">Register</Link></li>
                    <li className="nav-item"><Link to="/safety">Safety</Link></li>
                    <li className="nav-item"><Link to="/contact">Contact</Link></li>
                    <li className="nav-item">
                        <Link to={'/login'}><button className="login-button">Log In</button></Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
