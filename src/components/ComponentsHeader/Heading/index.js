import './Heading.scss';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../../../images/75.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faUser,
    faBagShopping,
    faShoppingCart,
    faBars,
    faGear,
} from '@fortawesome/free-solid-svg-icons';
import ProductinCartModal from './ProductinCartModal';
import { AuthContext } from '../../../Context/AuthProvider';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase/firebaseConfig';
import SidebarSetting from './SidebarSetting';
import SidebarMenu from './SidebarMenu';

const userItem = [
    {
        id: 1,
        display: 'Signin',
        path: '/signin',
    },
    {
        id: 2,
        display: 'Cart',
        path: '/cart',
    },
    {
        id: 3,
        display: 'Wishlist',
        path: '/wishlist',
    },
    {
        id: 4,
        display: 'Compare',
        path: '/compare',
    },
];

const userItem2 = [
    {
        id: 1,
        display: 'My Account',
        path: '/account',
    },
    {
        id: 2,
        display: 'Cart',
        path: '/cart',
    },
    {
        id: 3,
        display: 'Wishlist',
        path: '/wishlist',
    },
    {
        id: 4,
        display: 'Compare',
        path: '/compare',
    },
    {
        id: 5,
        display: 'Logout',
        path: '/',
    },
];

function Heading() {
    let total = 0;
    const [menuOpenUser, setMenuOpenUser] = useState(false);
    const [modalSearchOpen, setModalSearchOpen] = useState(false);
    const [modalCartOpen, setModalCartOpen] = useState(false);
    const [userList, setUserList] = useState(userItem);
    const [sidebarSettingOpen, setSidebarSettingOpen] = useState(false);
    const [sidebarMenuOpen, setSidebarMenuOpen] = useState(false);

    const quantity = useSelector((state) => state.cart.totalQuantity);
    const productsListinCart = useSelector((state) => state.cart.productsList);

    useEffect(() => {
        if (
            modalCartOpen === true ||
            modalSearchOpen === true ||
            sidebarSettingOpen === true ||
            sidebarMenuOpen === true
        ) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [modalCartOpen, modalSearchOpen, sidebarSettingOpen, sidebarMenuOpen]);

    const user = useContext(AuthContext);

    productsListinCart.forEach((item) => {
        total += item.totalPrice;
    });

    const clickOpenMenuUser = () => {
        setMenuOpenUser((e) => !e);

        if (user.currentUser) {
            setUserList(userItem2);
        } else if (user.currentUser === undefined) {
            setUserList(userItem);
        }
    };

    const clickOpenModalSearch = () => {
        setModalSearchOpen(!modalSearchOpen);
    };

    const clickOpenModalCart = () => {
        setModalCartOpen(!modalCartOpen);
    };

    const clickOpenSidebarSetting = () => {
        setSidebarSettingOpen(!sidebarSettingOpen);
    };

    const clickOpenSidebarMenu = () => {
        setSidebarMenuOpen(!sidebarMenuOpen);
    };

    const handleLogout = () => {
        signOut(auth)
            .then(() => {})
            .catch((err) => {
                alert(err);
            });
    };

    return (
        <>
            <div className="heading-bar">
                <div className="container">
                    <div className="menu-icon" onClick={clickOpenSidebarMenu}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    <div className="logo-furns">
                        <Link to="/">
                            <img src={logo} alt={logo}></img>
                        </Link>
                    </div>

                    <div className="right">
                        <div className="search-icon" onClick={clickOpenModalSearch}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                        <div className="setting-icon" onClick={clickOpenSidebarSetting}>
                            <FontAwesomeIcon icon={faGear} />
                        </div>

                        <div className="user-icon" onClick={clickOpenMenuUser}>
                            <FontAwesomeIcon icon={faUser} className="icon" />
                            {menuOpenUser && (
                                <ul className="user-list">
                                    {userList.map((item) => (
                                        <li
                                            className="user-item"
                                            key={item.id}
                                            onClick={() => {
                                                if (item.id === 5) {
                                                    handleLogout();
                                                }
                                            }}
                                        >
                                            <Link to={item.path}>{item.display}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className="bag-icon" onClick={clickOpenModalCart}>
                            <FontAwesomeIcon icon={faBagShopping} />
                            <span className="number">{quantity}</span>
                        </div>
                    </div>
                </div>
            </div>

            {modalSearchOpen && (
                <div
                    className="modal-search"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            clickOpenModalSearch();
                        }
                    }}
                >
                    <div className="box">
                        <div className="box-container">
                            <input placeholder="Enter your search keyword..." />
                            <div className="search-btn">
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="icon-search" />
                            </div>
                            <div className="popular-search">
                                <h4>Popular Searches:</h4>
                                <ul>
                                    <li>
                                        <a href="/">bed</a>
                                    </li>
                                    <li>
                                        <a href="/">chair</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="close-box" onClick={clickOpenModalSearch}>
                                <div className="x1"></div>
                                <div className="x2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {modalCartOpen && (
                <div
                    className="modal-cart"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            clickOpenModalCart();
                        }
                    }}
                >
                    <div className="contain">
                        <div className="head">
                            <h2>Cart</h2>
                            <div className="close-box" onClick={clickOpenModalCart}>
                                <div className="x1"></div>
                                <div className="x2"></div>
                            </div>
                        </div>
                        <div className={productsListinCart.length > 3 ? 'body scroll-bar' : 'body'}>
                            {productsListinCart.length > 0 ? (
                                productsListinCart.map((item) => (
                                    <ProductinCartModal
                                        setModalCartOpen={setModalCartOpen}
                                        key={item.id}
                                        id={item.id}
                                        img={item.img}
                                        alt={item.alt}
                                        nameProduct={item.name}
                                        newPrice={item.price}
                                        quantity={item.quantity}
                                    />
                                ))
                            ) : (
                                <div>
                                    <FontAwesomeIcon icon={faShoppingCart} className="body-icon" />
                                    <h3>There are no products!</h3>
                                </div>
                            )}
                        </div>
                        <div className="leg">
                            <a href="/">
                                View Cart <span>${total.toFixed(2)}</span>
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {sidebarSettingOpen && <SidebarSetting setSidebarSettingOpen={setSidebarSettingOpen} />}
            {sidebarMenuOpen && <SidebarMenu setSidebarMenuOpen={setSidebarMenuOpen} />}
        </>
    );
}

export default Heading;
