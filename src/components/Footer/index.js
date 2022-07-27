import './Footer.scss';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedinIn, faYoutube, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-row">
                    <div className="about-us">
                        <h4>ABOUT US</h4>
                        <div className="about">
                            <p className="about-text">
                                Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor incididunt ut labor
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                            </p>
                            <ul className="about-icon">
                                <li>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faYoutube} />
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faPinterest} />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="information">
                        <h4>INFORMATION</h4>
                        <div className="information-container">
                            <ul className="information-list">
                                <li>
                                    <Link
                                        to="/about"
                                        onClick={() => {
                                            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                        }}
                                    >
                                        About us
                                    </Link>
                                </li>
                                <li>Manufactures</li>
                                <li>Tracking Order</li>
                                <li>Privacy & Policy</li>
                                <li>Terms & Conditions</li>
                            </ul>
                        </div>
                    </div>
                    <div className="my-account">
                        <h4>MY ACCOUNT</h4>
                        <div className="myaccount-container">
                            <ul className="myaccount-list">
                                <li>
                                    <Link
                                        to="/signin"
                                        onClick={() => {
                                            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                        }}
                                    >
                                        Login
                                    </Link>
                                </li>
                                <li>My Cart</li>
                                <li>Wishlist</li>
                                <li>Compare</li>
                                <li>My Account</li>
                            </ul>
                        </div>
                    </div>
                    <div className="newsletter">
                        <h4>NEWSLETTER</h4>
                        <div className="newletter-container">
                            <input placeholder="Enter E-Mail Address" />
                            <button className="newsletter-btn">
                                <FontAwesomeIcon icon={faPaperPlane} className="icon-btn" />
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
