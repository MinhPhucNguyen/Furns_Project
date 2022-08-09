import './News.scss';
import React from 'react';
import { Link } from 'react-router-dom';

function News({ dataNews }) {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    return (
        <>
            {dataNews.map((item) => (
                <div key={item.id} className="slide-news-container">
                    <div className="item-news">
                        <Link to={`/blog/${item.id}`} className="news-img" onClick={scrollToTop}>
                            <img src={item.img} alt={item.alt} />
                        </Link>
                        <div className="news-preview">
                            <h2 className="news-title">
                                <a href="/">{item.title}</a>
                            </h2>

                            <div className="source">
                                By
                                <a href="/">{item.author},</a>
                                <a href="/" className="time">
                                    {item.time}
                                </a>
                            </div>
                            <p>{item.summary}</p>
                            <Link to={`/blog/${item.id}`} className="read-more-btn" onClick={scrollToTop}>
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default News;
