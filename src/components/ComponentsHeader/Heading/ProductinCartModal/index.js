import './ProductinCartModal.scss';
import { cartActions } from '../../../../pages/UserPages/CartPage/CartSlice';
import { useDispatch } from 'react-redux';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function ProductinCartModal({ id, img, alt, nameProduct, newPrice, quantity }) {
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
                quantity,
            }),
        );
    };

    return (
        <div className="product-in-cart">
            <div className="image-of-product">
                <img src={img} alt={alt} />
            </div>
            <div className="info-of-product">
                <div>
                    <a href="/">{nameProduct}</a>
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
