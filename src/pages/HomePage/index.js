import './HomePage.scss';
import React from 'react';

import SlideShow from '../../components/SlideShow';
import CircleNav from '../../components/CircleNav';
import OurProducts from '../../components/OurProducts';
import RecommendProducts from '../../components/RecommendProducts';
import LatestNews from '../../components/LatestNews';

function HomePage() {
    return (
        <>
            <SlideShow />
            <CircleNav />
            <OurProducts />
            <RecommendProducts />
            <LatestNews />
        </>
    );
}

export default HomePage;
