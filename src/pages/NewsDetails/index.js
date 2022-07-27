import React from 'react';
import './NewDetails.scss';
import { Link, useParams } from 'react-router-dom';
import { dataNews } from '../../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';

function NewsDetails() {
    const { newsId } = useParams();
    const newsDetail = dataNews.find((item) => item.id === parseInt(newsId));

    return (
        <div className="header-page-route">
            <div className="header-page-route-container">
                <div className="container">
                    <h2 className="header-page-route-title">{newsDetail.title}</h2>
                    <div>
                        <span>
                            <Link to={'/'}>HOME</Link>
                        </span>
                        <span>/ BLOG</span>
                        <span className="title-path">/ {newsDetail.title}</span>
                    </div>
                </div>
            </div>
            <div className="main-content">
                <div className="news-image">
                    <img src={newsDetail.img} alt={newsDetail.alt} />
                </div>
                <div className="author-time">
                    <div className="author">By {newsDetail.author}</div>
                    <div className="time">{newsDetail.time}</div>
                </div>
                <h2 className="news-title">{newsDetail.title}</h2>
                <div className="content">
                    <div className="paragraph1">{newsDetail.mainContent.paragraph1}</div>
                    <div className="paragraph2">{newsDetail.mainContent.paragraph2}</div>
                    <div className="paragraph3">{newsDetail.mainContent.paragraph3}</div>
                    <div className="paragraph4">{newsDetail.mainContent.paragraph4}</div>
                </div>
                <div className="content-footer">
                    <div className="tags">
                        <span>Tags: </span>
                        <ul>
                            <li>furniture, </li>
                            <li>react, </li>
                            <li>shopify, </li>
                        </ul>
                    </div>
                    <div className="share">
                        <span>Share: </span>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faFacebook} />
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faTwitter} />
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faPinterest} />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsDetails;
