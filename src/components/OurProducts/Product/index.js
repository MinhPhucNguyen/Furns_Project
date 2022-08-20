import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare, faRepeat, faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../pages/UserPages/CartPage/CartSlice';
import { wishlistActions } from '../../../pages/UserPages/WishlistPage/WishListSlice';
import ProductDetailModal from '../../ProductDetailModal';
import { Products } from '../../../data';

function Product({ id, nameProduct, img, alt, percentSale, status, chooseBtn, oldPrice, newPrice }) {
    const [renameAddBtn, setRenameAddBtn] = useState(false);
    const [reIcon, setReIcon] = useState(false);
    const [openProductDetailModal, setOpenProductDetailModal] = useState(false);

    const productDetail = Products.find((item) => item.id === id);

    const dispatch = useDispatch();
    const handleAddtoCart = () => {
        if (chooseBtn === 'Add to Cart') {
            //Redux
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
            //
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

    const handleClickOpenProductModal = () => {
        setOpenProductDetailModal(!openProductDetailModal);
    };

    useEffect(() => {
        if (openProductDetailModal === true) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [openProductDetailModal]);

    return (
        <div className="item-product">
            <div className="info-product">
                <div className="product-image">
                    <Link to={`/product/${id}`}>
                        <img
                            src={img}
                            alt={alt}
                            onClick={() => {
                                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                            }}
                        />
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
                    <div className="btn-action" onClick={handleClickOpenProductModal}>
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
            {openProductDetailModal && (
                <ProductDetailModal
                    productDetail={productDetail}
                    setOpenProductDetailModal={setOpenProductDetailModal}
                />
            )}
        </div>
    );
}

export default Product;
