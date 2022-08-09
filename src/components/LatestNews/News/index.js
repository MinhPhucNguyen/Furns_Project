import './News.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import ScrollContainer from 'react-indiana-drag-scroll';

function News({ dataNews }) {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    return (
        <ScrollContainer className="slide-news-container">
            {dataNews.map((item) => (
                <div className="item-news" key={item.id}>
                    <Link to={`/blog/${item.id}`} className="news-img" onClick={scrollToTop}>
                        <img src={item.img} alt={item.alt} />
                    </Link>
                    <div className="news-preview">
                        <h2 className="news-title">
                            <Link to={`/blog/${item.id}`} onClick={scrollToTop}>
                                {item.title}
                            </Link>
                        </h2>

                        <div className="source">
                            By
                            <span href="/">{item.author},</span>
                            <span href="/" className="time">
                                {item.time}
                            </span>
                        </div>
                        <p>{item.summary}</p>
                        <Link to={`/blog/${item.id}`} className="read-more-btn" onClick={scrollToTop}>
                            Read More
                        </Link>
                    </div>
                </div>
            ))}
        </ScrollContainer>
    );
}

export default News;
