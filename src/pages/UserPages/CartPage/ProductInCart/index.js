import React from 'react';
import './ProductInCart.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import { useDispatch } from 'react-redux';
import { cartActions } from '../CartSlice';

function ProductInCart({ id, img, alt, nameProduct, newPrice, quantity, totalPrice }) {
    const dispatch = useDispatch();

    const handleDecreaseQuantity = () => {
        dispatch(cartActions.editQuantityFromCart(id));
    };

    const handleIncreaseQuantity = () => {
        dispatch(cartActions.addToCart({ id, img, alt, nameProduct, newPrice }));
    };

    const handleClickRemoveItem = () => {
        dispatch(cartActions.removeItemProduct(id));
    };

    return (
        <tr>
            <td className="product-img">
                <a href="/">
                    <div>
                        <img src={img} alt={alt} />
                    </div>
                </a>
            </td>
            <td className="product-name">
                <a href="/">{nameProduct}</a>
            </td>
            <td className="until-price">{newPrice}</td>
            <td className="quantity">
                <div>
                    <button className="decrease" onClick={handleDecreaseQuantity}>
                        -
                    </button>
                    <input type="text" defaultValue={quantity} className="input-quantity" />
                    <button className="increase" onClick={handleIncreaseQuantity}>
                        +
                    </button>
                </div>
            </td>
            <td className="subtotal">${totalPrice.toFixed(2)}</td>
            <td className="action">
                <div>
                    <FontAwesomeIcon icon={faPenToSquare} className="icon" />
                    <FontAwesomeIcon icon={faXmarkCircle} className="icon" onClick={handleClickRemoveItem} />
                </div>
            </td>
        </tr>
    );
}

export default ProductInCart;
