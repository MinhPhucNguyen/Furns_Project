import React, { useState } from 'react';
import './LatestNews.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import News from './News';
import { dataNews } from '../../data';

function LatestNews() {
    const [currNews, setCurrNews] = useState(0);

    const handleClick = (move) => {
        console.log(dataNews.length);
        move === 'left'
            ? setCurrNews(currNews > 0 ? currNews - 1 : 0)
            : setCurrNews(
                  currNews < Math.floor(dataNews.length / 3) - 1 ? currNews + 1 : Math.floor(dataNews.length / 3),
              );
    };

    return (
        <div className="latest-news">
            <div className="container-news">
                <div className="heading">
                    <h2>Latest News</h2>
                    <p>
                        Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut
                        labore
                    </p>
                </div>
                <div className="news">
                    <div className="slide-news" style={{ transform: `translateX(-${currNews * 77}vw)` }}>
                        <News dataNews={dataNews} />
                    </div>
                </div>
            </div>
            <div className="arrow arow-left" onClick={() => handleClick('left')}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className="arrow arow-right" onClick={() => handleClick()}>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        </div>
    );
}

export default LatestNews;
