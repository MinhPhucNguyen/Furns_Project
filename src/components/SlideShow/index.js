import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SlideShow.scss';

import slider1 from '../../images/slider-1.png';
import slider2 from '../../images/slider-2.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const data = [
    {
        id: '1',
        title: 'New Products',
        nameProduct: 'Flexible Chair',
        desc: 'Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna ',
        img: slider1,
        alt: 'slider1',
    },
    {
        id: '2',
        title: 'Best Seller',
        nameProduct: 'Creative Sofa',
        desc: 'Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna ',
        img: slider2,
        alt: 'slider2',
    },
];

function SlideShow() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleClick = (direction) => {
        direction === 'left'
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 0)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : data.length - 1);
    };

    const handleClickRadio = (obj) => {
        setCurrentSlide(obj.id - 1);
    };

    return (
        <div className="works">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map((obj, index) => (
                    <div key={index} className="container">
                        <div className="item">
                            <div className="left">
                                <h4>{obj.title}</h4>
                                <h2>{obj.nameProduct}</h2>
                                <p>{obj.desc}</p>
                                <Link to="/products">Shop Now</Link>
                            </div>
                            <div className="right">
                                <div className="right-container-img">
                                    <img src={obj.img} alt={obj.alt} className="slider-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={'arrow arrow-left ' + (currentSlide === 0 && 'active')} onClick={() => handleClick('left')}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div
                className={'arrow arrow-right ' + (currentSlide === data.length - 1 && 'active')}
                onClick={() => handleClick()}
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
            <div className="radio">
                {data.map((obj, index) => (
                    <span
                        key={index}
                        className={'radioSlide ' + (`${currentSlide + 1}` === obj.id && 'active')}
                        onClick={() => handleClickRadio(obj)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default SlideShow;
