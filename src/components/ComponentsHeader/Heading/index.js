import './Heading.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../../../images/75.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faBagShopping, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ProductinCartModal from './ProductinCartModal';

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

function Heading() {
    let total = 0;
    const [menuOpenUser, setMenuOpenUser] = useState(false);
    const [modalSearchOpen, setModalSearchOpen] = useState(false);
    const [modalCartOpen, setModalCartOpen] = useState(false);
    const quantity = useSelector((state) => state.cart.totalQuantity);
    const productsListinCart = useSelector((state) => state.cart.productsList);

    productsListinCart.forEach((item) => {
        total += item.totalPrice;
    });

    const clickOpenMenuUser = () => {
        setMenuOpenUser((e) => !e);
    };

    const clickOpenModalSearch = () => {
        setModalSearchOpen((e) => !e);
    };

    const clickOpenModalCart = () => {
        setModalCartOpen((e) => !e);
    };

    return (
        <>
            <div className="heading">
                <div className="container">
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt={logo}></img>
                        </Link>
                    </div>
                    <div className="right">
                        <div className="search-icon" onClick={clickOpenModalSearch}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                        <div className="user-icon" onClick={clickOpenMenuUser}>
                            <FontAwesomeIcon icon={faUser} className="icon" />
                            {menuOpenUser && (
                                <ul className="user-list">
                                    {userItem.map((item) => (
                                        <li className="user-item" key={item.id}>
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
        </>
    );
}

export default Heading;
