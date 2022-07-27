import React, { useState } from 'react';
import './WishlistItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import { useDispatch } from 'react-redux';
import { wishlistActions } from '../WishListSlice';
import { cartActions } from '../../CartPage/CartSlice';

function WishlistItem({ id, img, alt, nameProduct, newPrice, quantity, total, chooseBtn }) {
    const [renameBtn, setRenameBtn] = useState(false);
    const [reNameofChooseBtn, setNameofChooseBtn] = useState('Add to Cart');

    const dispatch = useDispatch();

    const handleRemoveFromWishlist = () => {
        dispatch(wishlistActions.removeFromWishlist(id));
    };

    const handleClickAddtoCart = () => {
        if (reNameofChooseBtn === 'Add to Cart' && chooseBtn !== 'Out of Stock') {
            dispatch(
                cartActions.addToCart({
                    id,
                    img,
                    alt,
                    nameProduct,
                    newPrice,
                    quantity,
                    total,
                    chooseBtn,
                }),
            );
            setRenameBtn(true);
        }
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
            <td className="add-to-cart">
                <button
                    className={chooseBtn === 'Out of Stock' ? 'add-to-cart-btn disable' : 'add-to-cart-btn'}
                    onClick={handleClickAddtoCart}
                >
                    {renameBtn ? 'Already Added' : chooseBtn === 'Select Options' ? reNameofChooseBtn : chooseBtn}
                </button>
            </td>
            <td className="action">
                <div>
                    <FontAwesomeIcon icon={faXmarkCircle} className="icon" onClick={handleRemoveFromWishlist} />
                </div>
            </td>
        </tr>
    );
}

export default WishlistItem;
