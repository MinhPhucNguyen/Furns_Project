import './UserNavBar.scss';
import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import { faRepeat, faHouse, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import CartModal from '../CartModal';
import { AuthContext } from '../../Context/AuthProvider';

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
    },
    {
        id: 5,
        icon: faUser,
        display: 'Account',
        path: '/signin',
    },
];

const userNavbarList2 = [
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
    },
    {
        id: 5,
        icon: faUser,
        display: 'Account',
        path: '/account',
    },
];

function UserNavBar() {
    const [modalCartOpen, setModalCartOpen] = useState(false);
    const user = useContext(AuthContext);
    // console.log(user.currentUser);

    const handleClickUserNavbar = (item) => {
        if (item.path !== undefined) {
            window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
        } else {
            setModalCartOpen(!modalCartOpen);
        }
    };

    console.log(userNavbarList[userNavbarList.length - 1].path);

    return (
        <>
            <div className="user_navbar">
                <div className="user_navbar-container">
                    <ul className="user_navbar-list">
                        {(user.currentUser === undefined ? userNavbarList : userNavbarList2).map((item) => (
                            <li className="user_navbar-item" key={item.id} onClick={() => handleClickUserNavbar(item)}>
                                <Link to={item.path !== undefined ? item.path : true}>
                                    <FontAwesomeIcon icon={item.icon} />
                                    <span>{item.display}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {modalCartOpen && <CartModal setModalCartOpen={setModalCartOpen} />}
        </>
    );
}

export default UserNavBar;
