import './CartModal.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ProductinCartModal from '../ComponentsHeader/Heading/ProductinCartModal';
import { Link } from 'react-router-dom';

function CartModal({ setModalCartOpen }) {
    let total = 0;
    const productsListinCart = useSelector((state) => state.cart.productsList);

    productsListinCart.forEach((item) => {
        total += item.totalPrice;
    });

    return (
        <>
            <div
                className="modal-cart"
                onClick={(e) => {
                    if (e.target === e.currentTarget) {
                        setModalCartOpen(false);
                    }
                }}
            >
                <div className="contain">
                    <div className="head">
                        <h2>Cart</h2>
                        <div className="close-box" onClick={() => setModalCartOpen(false)}>
                            <div className="x1"></div>
                            <div className="x2"></div>
                        </div>
                    </div>
                    <div className="body">
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
                    <div className="leg" onClick={() => setModalCartOpen(false)}>
                        <Link to="/cart">
                            View Cart <span>${total.toFixed(2)}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartModal;
