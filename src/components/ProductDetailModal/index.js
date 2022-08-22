import React, { useState } from 'react';
import './ProductDetailModal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faFacebookSquare, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { useDispatch } from 'react-redux';
import { cartActions } from '../../pages/UserPages/CartPage/CartSlice';
import { wishlistActions } from '../../pages/UserPages/WishlistPage/WishListSlice';
import { compareActions } from '../../pages/UserPages/ComparePage/CompareSlice';

function ProductDetailModal({ setOpenProductDetailModal, productDetail }) {
    const [renameBtnWishlist, setRenameBtnWishlist] = useState(false);
    const [renameBtnCompare, setRenameBtnCompare] = useState(false);

    let [quantityProduct, setQuantityProduct] = useState(1);

    const newProductDetail = { ...productDetail, quantity: quantityProduct };

    const dispatch = useDispatch();

    const handleClickAddtoCart = () => {
        if (productDetail.chooseBtn !== 'Out of Stock') {
            dispatch(cartActions.addToCart(newProductDetail));
        }
    };

    const handleClickAddtoWishlist = () => {
        if (renameBtnWishlist === false) {
            dispatch(wishlistActions.addtoWishlist(productDetail));
            setRenameBtnWishlist(true);
        } else {
            dispatch(wishlistActions.removeFromWishlist(productDetail));
            setRenameBtnWishlist(false);
        }
    };

    const handleClickAddtoCompare = () => {
        if (renameBtnCompare === false) {
            dispatch(compareActions.addtoCompare(productDetail));
            setRenameBtnCompare(true);
        } else {
            dispatch(compareActions.removeFromCompare(productDetail.id));
            setRenameBtnCompare(false);
        }
    };

    const handleIncreaseQuantity = () => {
        quantityProduct >= productDetail.availabilityInStock
            ? (quantityProduct = productDetail.availabilityInStock)
            : setQuantityProduct(quantityProduct + 1);
    };

    const handleDecreasQuantity = () => {
        quantityProduct <= productDetail.availabilityInStock && quantityProduct > 1
            ? setQuantityProduct(quantityProduct - 1)
            : (quantityProduct = 1);
    };

    return (
        <div
            className="product_detail_modal"
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    setOpenProductDetailModal();
                }
            }}
        >
            <div className="product_detail_modal__container">
                <div className="close_modal__btn" onClick={() => setOpenProductDetailModal()}>
                    <div className="x1"></div>
                    <div className="x2"></div>
                </div>

                <div className="product_detail_modal__inner">
                    <div className="product_detail_modal__content">
                        <div className="product-img-left">
                            <div className="image-slide">
                                <div className="image">
                                    <img src={productDetail.img} alt={productDetail.alt} />
                                </div>
                            </div>
                        </div>
                        <div className="product-info-right">
                            <p className="sku">
                                <span>SKU:</span>
                                {productDetail.sku}
                            </p>
                            <p className="availability">
                                <span>Availability: </span>
                                {productDetail.availabilityInStock === 'Out of Stock' ? (
                                    productDetail.availabilityInStock
                                ) : (
                                    <>{productDetail.availabilityInStock} in Stock</>
                                )}
                            </p>
                            <h2 className="name-of-product">{productDetail.nameProduct}</h2>
                            <div className="price-of-product">
                                <div
                                    className={productDetail.oldPrice !== '' ? 'old-price' : 'old-price hide-old-price'}
                                >
                                    {productDetail.oldPrice}
                                </div>
                                <div className="new-price">{productDetail.newPrice}</div>
                            </div>
                            <p>{productDetail.info}</p>
                            <div className="quantity-cart-product">
                                <div className="quantity-btn">
                                    <button className="decrease-quantity" onClick={handleDecreasQuantity}>
                                        -
                                    </button>
                                    <input type="text" value={quantityProduct} className="quantity-product" />
                                    <button className="increase-quantity" onClick={handleIncreaseQuantity}>
                                        +
                                    </button>
                                </div>
                                <button
                                    className={
                                        productDetail.chooseBtn === 'Out of Stock'
                                            ? 'add-to-cart-btn disable-btn'
                                            : 'add-to-cart-btn'
                                    }
                                    onClick={handleClickAddtoCart}
                                >
                                    {productDetail.chooseBtn === 'Out of Stock'
                                        ? productDetail.chooseBtn
                                        : 'Add to Cart'}
                                </button>
                            </div>
                            <div className="wishlist-compare-btn">
                                <div className="wishlist-btn" onClick={handleClickAddtoWishlist}>
                                    <FontAwesomeIcon icon={faHeart} className="icon" />
                                    {renameBtnWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
                                </div>
                                <div className="compare-btn" onClick={handleClickAddtoCompare}>
                                    <FontAwesomeIcon icon={faCodeCompare} className="icon" />
                                    {renameBtnCompare ? 'Remove from Compare' : ' Add to Compare'}
                                </div>
                            </div>
                            <div className="share-media">
                                <h4>Share: </h4>
                                <div className="media">
                                    <a href="https://www.facebook.com/" rel="noreferrer" target="_blank">
                                        <FontAwesomeIcon icon={faFacebookSquare} />
                                    </a>
                                    <a href="https://www.facebook.com/" rel="noreferrer" target="_blank">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                    <a href="https://www.facebook.com/" rel="noreferrer" target="_blank">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailModal;
