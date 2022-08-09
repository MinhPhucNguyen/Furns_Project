import React from 'react';
import './LatestNews.scss';

import News from './News';
import { dataNews } from '../../data';

function LatestNews() {
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
                    <div className="slide-news">
                        <News dataNews={dataNews} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LatestNews;
