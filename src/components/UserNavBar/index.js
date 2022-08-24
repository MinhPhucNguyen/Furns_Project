import './UserNavBar.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import { faRepeat, faHouse, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const userNavbarList = [
    {
        id: 1,
        icon: faHeart,
        display: 'Wishlist',
        path: '/wishlist',
    },
    {
        id: 2,
        icon: faRepeat,
        display: 'Compare',
        path: '/compare',
    },
    {
        id: 3,
        icon: faHouse,
        display: 'Home',
        path: '/',
    },

    {
        id: 4,
        icon: faCartShopping,
        display: 'Cart',
        path: '/cart',
    },
    {
        id: 5,
        icon: faUser,
        display: 'Account',
        path: '/signin',
    },
];

function UserNavBar() {
    return (
        <div className="user_navbar">
            <div className="user_navbar-container">
                <ul className="user_navbar-list">
                    {userNavbarList.map((item) => (
                        <li
                            className="user_navbar-item"
                            key={item.id}
                            onClick={() => {
                                window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
                            }}
                        >
                            <Link to={item.path}>
                                <FontAwesomeIcon icon={item.icon} />
                                <span>{item.display}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default UserNavBar;
