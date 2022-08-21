import React, { useEffect } from 'react';
import './CircleNav.scss';
import { Link } from 'react-router-dom';

import bedroom from '../../images/bedroom.png';
import living from '../../images/living.png';
import dining from '../../images/dining.png';
import lounge from '../../images/lounge.png';
import officeChair from '../../images/living.png';
import ScrollContainer from 'react-indiana-drag-scroll';

export const dataCircle = [
    {
        id: '1',
        src: bedroom,
        alt: 'bedroom',
        title: 'Bedroom',
        path: '/collection/bedroom',
    },
    {
        id: '2',
        src: living,
        alt: 'living',
        title: 'Living',
        path: '/collection/living',
    },
    {
        id: '3',
        src: dining,
        alt: 'dining',
        title: 'Dining',
        path: '/collection/dining',
    },
    {
        id: '4',
        src: lounge,
        alt: 'lounge',
        title: 'Lounge',
        path: '/collection/lounge',
    },
    {
        id: '5',
        src: officeChair,
        alt: 'officeChair',
        title: 'Office Chair',
        path: '/collection/office-chair',
    },
];

function CircleNav() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    });

    return (
        <div className="circles-nav">
            <div className="container">
                <div className="item">
                    <ScrollContainer className="circles-nav-container">
                        {dataCircle.map((obj, index) => (
                            <div key={index} className="circles">
                                <Link
                                    to={obj.path}
                                    className="circle-item"
                                    onClick={() => {
                                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                    }}
                                >
                                    <div className="icon">
                                        <img src={obj.src} alt={obj.alt} />
                                    </div>
                                    <h4 className="circle-title">{obj.title}</h4>
                                </Link>
                            </div>
                        ))}
                    </ScrollContainer>
                </div>
            </div>
        </div>
    );
}

export default CircleNav;
