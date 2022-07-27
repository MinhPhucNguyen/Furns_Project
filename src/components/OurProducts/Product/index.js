import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUpRightFromSquare, faRepeat, faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons';

import { useDispatch } from 'react-redux';
import { cartActions } from '../../../pages/UserPages/CartPage/CartSlice';
import { wishlistActions } from '../../../pages/UserPages/WishlistPage/WishListSlice';

function Product({ id, nameProduct, img, alt, percentSale, status, chooseBtn, oldPrice, newPrice }) {
    const [renameAddBtn, setRenameAddBtn] = useState(false);
    const [reIcon, setReIcon] = useState(false);

    const dispatch = useDispatch();
    const handleAddtoCart = () => {
        if (chooseBtn === 'Add to Cart') {
            dispatch(
                cartActions.addToCart({
                    id,
                    img,
                    alt,
                    nameProduct,
                    newPrice,
                    chooseBtn,
                }),
            );
            setRenameAddBtn(true);
        }
    };

    const handleWithWishlist = () => {
        if (reIcon === true) {
            dispatch(wishlistActions.removeFromWishlist(id));
            setReIcon(false);
        } else {
            dispatch(
                wishlistActions.addtoWishlist({
                    id,
                    img,
                    alt,
                    nameProduct,
                    newPrice,
                    chooseBtn,
                }),
            );
            setReIcon(true);
        }
    };

    return (
        <div className="item-product">
            <div className="info-product">
                <div className="product-image">
                    <Link to={`/product/${id}`}>
                        <img src={img} alt={alt} />
                    </Link>

                    <div
                        className={chooseBtn === 'Out of Stock' || renameAddBtn ? 'choose disable' : 'choose'}
                        onClick={handleAddtoCart}
                    >
                        <FontAwesomeIcon icon={faCartShopping} />
                        <span>{renameAddBtn ? 'Already Added' : chooseBtn}</span>
                    </div>
                </div>
                <div className={'sale ' + (percentSale === '' ? 'active' : '')}>
                    <span>{percentSale}</span>
                </div>
                <div className={'status ' + (status === '' ? 'active' : '')}>{status}</div>
                <div className="action">
                    <div className="btn-action" onClick={handleWithWishlist}>
                        {reIcon ? <FontAwesomeIcon icon={faTrash} /> : <FontAwesomeIcon icon={faHeart} />}
                    </div>
                    <div className="btn-action">
                        <FontAwesomeIcon icon={faUpRightFromSquare} />
                    </div>
                    <div className="btn-action">
                        <FontAwesomeIcon icon={faRepeat} />
                    </div>
                </div>
                <div className="name-price">
                    <h2 className="name">{nameProduct}</h2>
                    <div className="price">
                        <span className="old-price">{oldPrice}</span>
                        <span className="new-price">{newPrice}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
