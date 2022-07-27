import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const [scroll, setScroll] = useState(false);

    const stickNavbar = () => {
        let windowHeight = window.scrollY;
        windowHeight > 500 ? setScroll(true) : setScroll(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);

        return () => {
            window.removeEventListener('scroll', stickNavbar);
        };
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className={'navbar-heading ' + (scroll ? 'active-navbar' : '')}>
            <div className="container">
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <Link
                            to="/"
                            onClick={() => {
                                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                            }}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link
                            to="/about"
                            onClick={() => {
                                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                            }}
                        >
                            About
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link
                            to="/"
                            onClick={() => {
                                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                            }}
                        >
                            Home Furniture
                            <FontAwesomeIcon icon={faAngleDown} className="icon" />
                        </Link>
                        <ul className="dropdown">
                            <li className="item">
                                <Link
                                    to="/collection/bedroom"
                                    onClick={() => {
                                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                    }}
                                >
                                    Bedroom
                                </Link>
                            </li>
                            <li className="item">
                                <Link
                                    to="/collection/dining"
                                    onClick={() => {
                                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                    }}
                                >
                                    Dining
                                </Link>
                            </li>
                            <li className="item">
                                <Link
                                    to="/collection/living"
                                    onClick={() => {
                                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                    }}
                                >
                                    Living
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="navbar-item">
                        <Link
                            to="/"
                            onClick={() => {
                                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                            }}
                        >
                            Office Furniture
                            <FontAwesomeIcon icon={faAngleDown} className="icon" />
                        </Link>
                        <ul className="dropdown">
                            <li className="item">
                                <Link
                                    to="/collection/lounge"
                                    onClick={() => {
                                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                    }}
                                >
                                    Lounge
                                </Link>
                            </li>
                            <li className="item">
                                <Link
                                    to="/collection/office-chair"
                                    onClick={() => {
                                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                    }}
                                >
                                    Office Chair
                                </Link>
                            </li>
                            <li className="item">
                                <Link
                                    to="/collection/office-table"
                                    onClick={() => {
                                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                    }}
                                >
                                    Office Table
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="navbar-item">
                        <Link
                            to="/"
                            onClick={() => {
                                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                            }}
                        >
                            Hospital Furniture
                            <FontAwesomeIcon icon={faAngleDown} className="icon" />
                        </Link>
                        <ul className="dropdown">
                            <li className="item">
                                <Link
                                    to="/collection/hospital-bed"
                                    onClick={() => {
                                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                    }}
                                >
                                    Hospital Bed
                                </Link>
                            </li>
                            <li className="item">
                                <Link
                                    to="/collection/hospital-utility"
                                    onClick={() => {
                                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                    }}
                                >
                                    Hospital Utility
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="navbar-item">
                        <Link
                            to="/contact"
                            onClick={() => {
                                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                            }}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
