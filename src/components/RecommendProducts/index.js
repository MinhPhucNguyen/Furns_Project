import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './RecommnendProducts.scss';

import anh1 from '../../images/Recommend/anh1.jpg';
import anh2 from '../../images/Recommend/anh2.jpg';

const recommendSelect = [
    {
        id: '1',
        img: anh1,
        alt: 'anh1',
        text1: 'Sale Furniture ',
        text2: ' For Summner',
    },
    {
        id: '2',
        img: anh2,
        alt: 'anh2',
        text1: 'Office Chair ',
        text2: 'For Best Offer',
    },
];

function RecommendProducts() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="recommend">
            <div className="container">
                <div className="row">
                    {recommendSelect.map((item, index) => (
                        <Link
                            to="/products"
                            key={index}
                            className="select"
                            onClick={() => {
                                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                            }}
                        >
                            <div className="backgr-img">
                                <img src={item.img} alt={item.alt} />
                            </div>
                            <div className={item.id === '2' ? 'text-right active' : 'text-right'}>
                                <h3>
                                    {item.text1}
                                    <br />
                                    {item.text2}
                                </h3>
                                <p>Great Discount Here</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RecommendProducts;
