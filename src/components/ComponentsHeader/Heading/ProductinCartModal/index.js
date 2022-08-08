import React from 'react';
import { Link } from 'react-router-dom';
import './ProductinCartModal.scss';
import { cartActions } from '../../../../pages/UserPages/CartPage/CartSlice';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function ProductinCartModal({ id, img, alt, nameProduct, newPrice, quantity, clickOpenModalCart }) {
    const dispatch = useDispatch();

    const handleDecreaseQuantity = () => {
        dispatch(cartActions.editQuantityFromCart(id));
    };

    const handleIncreaseQuantity = () => {
        dispatch(
            cartActions.addToCart({
                id,
                img,
                alt,
                nameProduct,
                newPrice,
            }),
        );
    };

    return (
        <div className="product-in-cart">
            <Link
                to={`/product/${id}`}
                className="image-of-product"
                onClick={(e) => {
                    if (e.target === e.currentTarget) {
                        clickOpenModalCart();
                    }
                }}
            >
                <img src={img} alt={alt} />
            </Link>
            <div className="info-of-product">
                <div>
                    <Link
                        to={`/product/${id}`}
                        onClick={(e) => {
                            if (e.target === e.currentTarget) {
                                clickOpenModalCart();
                            }
                        }}
                    >
                        {nameProduct}
                    </Link>
                    <div className="quantity-and-price">
                        {quantity}
                        <span className="multiply">X</span>
                        <span className="price">{newPrice}</span>
                    </div>
                    <div className="quantity">
                        <button className="decrease-btn" onClick={handleDecreaseQuantity}>
                            -
                        </button>
                        <input type="text" value={quantity} />
                        <button className="increase-btn" onClick={handleIncreaseQuantity}>
                            +
                        </button>
                    </div>
                </div>
                <button>
                    <FontAwesomeIcon icon={faXmark} onClick={() => dispatch(cartActions.removeItemProduct(id))} />
                </button>
            </div>
        </div>
    );
}

export default ProductinCartModal;
