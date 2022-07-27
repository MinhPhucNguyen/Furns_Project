import './ContactPage.scss';
import React from 'react';
import { Link } from 'react-router-dom';

function ContactPage() {
    return (
        <div className="contact-page">
            <div className="contact-page-heading">
                <div className="container">
                    <h2 className="contact-page-title">CONTACT</h2>
                    <span>
                        <Link to={'/'}>HOME</Link>
                    </span>
                    <span>/ CONTACT</span>
                </div>
            </div>
            <div className="all-contact">
                <div className="contact-page-map"></div>
                <div className="contact-form">
                    <div className="contact-form-left">
                        <h2>Contact Info</h2>
                        <div className="phone-info">
                            <h3>Phone: </h3>
                            <div className="phone-number">
                                <p>+012 345 678 102</p>
                                <p>+012 345 678 203</p>
                            </div>
                        </div>
                        <div className="email-info">
                            <h3>Email: </h3>
                            <div className="email">
                                <p>
                                    <a href="mailto:email@here.com">email@here.com</a>
                                </p>
                                <p>
                                    <a href="mailto:your@email.heres">your@email.here</a>
                                </p>
                            </div>
                        </div>
                        <div className="address-info">
                            <h3>Address: </h3>
                            <div className="address">
                                <p>Address goes here,</p>
                                <p>street, Crossroad 123.</p>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form-right">
                        <h2>Get In Touch</h2>
                        <div className="form-input">
                            <div className="form-group">
                                <div className="form-group-row">
                                    <div className="left">
                                        <label className="name-user" htmlFor="firstname">
                                            First Name
                                        </label>
                                        <input id="firstname" />
                                    </div>
                                    <div className="right">
                                        <label className="name-user" htmlFor="lastname">
                                            Last Name
                                        </label>
                                        <input id="lastname" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-group-row">
                                    <div className="input-subject">
                                        <label className="name-user" htmlFor="subject">
                                            Subject
                                        </label>
                                        <input id="subject" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-group-row">
                                    <div className="input-message">
                                        <label className="name-user" htmlFor="message">
                                            Message
                                        </label>
                                        <textarea id="message" />
                                    </div>
                                </div>
                            </div>
                            <button className="send-btn">SEND MESSAGE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
