import React, { useEffect, useState } from 'react';
import './ProductDetail.scss';
import { useParams, Link } from 'react-router-dom';
import { Products } from '../../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeCompare, faUser, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faStar } from '@fortawesome/free-regular-svg-icons';
import { faFacebookSquare, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Product from '../../components/OurProducts/Product';
import { useDispatch } from 'react-redux';
import { cartActions } from '../UserPages/CartPage/CartSlice';
import { wishlistActions } from '../UserPages/WishlistPage/WishListSlice';
import { compareActions } from '../UserPages/ComparePage/CompareSlice';

function ProductDetail() {
    const dispatch = useDispatch();
    const { idProduct } = useParams();
    const [clickChangeControl, setClickChangeControl] = useState(true);
    const [renameBtnWishlist, setRenameBtnWishlist] = useState(false);
    const [renameBtnCompare, setRenameBtnCompare] = useState(false);
    let [quantityProduct, setQuantityProduct] = useState(1);
    const productDetail = Products.find((item) => item.id === parseInt(idProduct));

    const newProductDetail = { ...productDetail, quantity: quantityProduct };

    //Related Product
    const relatedProductsArr = Products.filter(
        (item) => item.nameProduct !== productDetail.nameProduct && item.type === productDetail.type,
    );
    ///////

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

    useEffect(() => {
        if (!clickChangeControl) {
            setClickChangeControl(false);
        } else {
            setClickChangeControl(true);
        }
    }, [clickChangeControl]);

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
        <div className="header-page-route">
            <div className="header-page-route-container">
                <div className="container">
                    <h2 className="header-page-route-title">{productDetail.nameProduct}</h2>
                    <div>
                        <span>
                            <Link to={'/'}>HOME</Link>
                        </span>
                        <span>/ PRODUCT</span>
                        <span className="title-path">/ {productDetail.nameProduct}</span>
                    </div>
                </div>
            </div>
            <div className="product-detail">
                <div className="product-detail-row-1">
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
                            <div className={productDetail.oldPrice !== '' ? 'old-price' : 'old-price hide-old-price'}>
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
                                {productDetail.chooseBtn === 'Out of Stock' ? productDetail.chooseBtn : 'Add to Cart'}
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

                <div className="product-detail-row-2">
                    <ul className="tab-control">
                        <li className="choose-control" onClick={() => setClickChangeControl(true)}>
                            Description
                            <div className={clickChangeControl ? 'border-bottom display-color' : 'border-bottom'}></div>
                        </li>
                        <li className="choose-control" onClick={() => setClickChangeControl(false)}>
                            Reviews
                            <div className={clickChangeControl ? 'border-bottom' : 'border-bottom display-color'}></div>
                        </li>
                    </ul>
                    <div className="description-reviews-control">
                        <div className={clickChangeControl ? ' description ' : ' description hide-content'}>
                            {productDetail.description.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))}
                        </div>
                        <div className={clickChangeControl ? 'reviews hide-content' : 'reviews'}>
                            <div className="reviews-left">
                                <div className="user-review">
                                    <div className="review-img">
                                        <div>
                                            <FontAwesomeIcon icon={faUser} className="user-icon" />
                                        </div>
                                    </div>
                                    <div className="review-content">
                                        <h4>White Lewis</h4>
                                        <div className="star-rating">
                                            <FontAwesomeIcon icon={faStar} className="star-icon" />
                                            <FontAwesomeIcon icon={faStar} className="star-icon" />
                                            <FontAwesomeIcon icon={faStar} className="star-icon" />
                                            <FontAwesomeIcon icon={faStar} className="star-icon" />
                                            <FontAwesomeIcon icon={faStar} className="star-icon" />
                                            <FontAwesomeIcon icon={faStar} className="star-icon" />
                                        </div>
                                        <p className="message-review">
                                            Vestibulum ante ipsum primis aucibus orci luctustrices ullarper euismod
                                            vehicula. Phasellus congue nulla.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="reviews-right">
                                <h2>Add your Review</h2>
                                <div className="form">
                                    <div className="your-rating">
                                        <span>Your Rating: </span>
                                        <FontAwesomeIcon icon={faStar} className="star-icon" />
                                        <FontAwesomeIcon icon={faStar} className="star-icon" />
                                        <FontAwesomeIcon icon={faStar} className="star-icon" />
                                        <FontAwesomeIcon icon={faStar} className="star-icon" />
                                        <FontAwesomeIcon icon={faStar} className="star-icon" />
                                        <FontAwesomeIcon icon={faStar} className="star-icon" />
                                    </div>
                                    <div className="message">
                                        <label htmlFor="your-message">Message</label>
                                        <textarea className="your-message"></textarea>
                                    </div>
                                    <div className="your-info">
                                        <div>
                                            <label htmlFor="name">Name</label>
                                            <input type="text" />
                                        </div>
                                        <div>
                                            <label htmlFor="email">Email</label>
                                            <input type="email" />
                                        </div>
                                    </div>
                                    <div className="submit-btn">
                                        <button type="submit">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-detail-row-3">
                    <div className="related-product">
                        {relatedProductsArr.length > 0 ? (
                            <>
                                <h2 className="related-product-title">Related Products</h2>
                                <div>
                                    {relatedProductsArr.map((item) => (
                                        <Product
                                            key={item.id}
                                            id={item.id}
                                            nameProduct={item.nameProduct}
                                            img={item.img}
                                            alt={item.alt}
                                            percentSale={item.percentSale}
                                            status={item.status}
                                            chooseBtn={item.chooseBtn}
                                            oldPrice={item.oldPrice}
                                            newPrice={item.newPrice}
                                        />
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className="non-products">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faBagShopping} />
                                </div>
                                <div className="information">
                                    <p> Related products not found!</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
