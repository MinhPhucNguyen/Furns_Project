import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.scss';

import anh1 from '../../images/about-page-image/1.jpg';
import anh2 from '../../images/about-page-image/2.jpg';

function AboutPage() {
    return (
        <div className="about-page">
            <div className="about-heading">
                <div className="container">
                    <h2 className="about-page-title">ABOUT US</h2>
                    <span>
                        <Link to={'/'}>HOME</Link>
                    </span>
                    <span>/ ABOUT</span>
                </div>
            </div>
            <div className="about-page-container">
                <h2>
                    Furns is a global furniture destination for somethings. We sell cutting-edge furniture and offer a
                    wide variety of fashion-related content.
                </h2>
            </div>
            <div className="about-page-image-container">
                <div className="image">
                    <img src={anh1} alt="anh1" />
                </div>
                <div className="image">
                    <img src={anh2} alt="anh2" />
                </div>
            </div>
            <div className="about-page-content">
                <div className="content">
                    <h4>OUR STORES</h4>
                    <p>
                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod
                        tempor.
                    </p>
                </div>
                <div className="content">
                    <h4>OUR MISSION</h4>
                    <p>
                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod
                        tempor.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
