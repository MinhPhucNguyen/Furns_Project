import './CartPage.scss';
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import HeaderPageRoute from '../../../components/HeaderPageRoute';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

import ProductInCart from './ProductInCart';
import { cartActions } from './CartSlice';

const headTable = [
    {
        id: '1',
        display: 'Image',
    },
    {
        id: '2',
        display: 'Product Name',
    },
    {
        id: '3',
        display: 'Until Price',
    },
    {
        id: '4',
        display: 'Quantity',
    },
    {
        id: '5',
        display: 'Subtotal',
    },
    {
        id: '6',
        display: 'Action',
    },
];

function CartPage() {
    let total = 0;
    const ProductsListinCart = useSelector((state) => state.cart.productsList);
<<<<<<< HEAD
=======
    // const getProductListinStore = JSON.parse(localStorage.getItem('ProductsListinCart'));
    // const [store, setStore] = useState(getProductListinStore ?? []);
>>>>>>> 4c1d095e568ff71defc0da04fd088ade729c86ed

    ProductsListinCart.forEach((item) => {
        total += item.totalPrice;
    });

    const dispatch = useDispatch();

    const clearAllProduct = () => {
        dispatch(cartActions.clearAllProductinCart());
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    // useEffect(() => {
    //     setStore((prev) => {
    //         const newProductList = [...prev];

    //         localStorage.setItem('newProductListabc', JSON.stringify(newProductList));

    //         return newProductList;
    //     });
    // }, []);

    return (
        <HeaderPageRoute>
            {ProductsListinCart.length > 0 ? (
                <div className="table-product">
                    <table>
                        <thead>
                            <tr>
                                {headTable.map((item) => (
                                    <th key={item.id} className="info-product">
                                        {item.display}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
<<<<<<< HEAD
                            {console.log(ProductsListinCart)}
=======
>>>>>>> 4c1d095e568ff71defc0da04fd088ade729c86ed
                            {ProductsListinCart.map((item) => (
                                <ProductInCart
                                    key={item.id}
                                    id={item.id}
                                    img={item.img}
                                    alt={item.alt}
                                    nameProduct={item.name}
                                    newPrice={item.price}
                                    quantity={item.quantity}
                                    totalPrice={item.totalPrice}
                                />
                            ))}

                            <tr>
                                <td colSpan="6">
                                    <div className="total-price">
                                        Grand Total: <span>${total.toFixed(2)}</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="control-cart">
                        <div className="left">
                            <input type="text" placeholder="Enter your coupon code if you have one" />
                            <button className="apply-coupon-btn">Apply Coupon</button>
                        </div>
                        <div className="right">
                            <button className="clear-cart-btn" onClick={clearAllProduct}>
                                Clear Cart
                            </button>
                            <Link to="/signin">
                                <button
                                    className="checkout-btn"
                                    onClick={() => {
                                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                    }}
                                >
                                    Proceed to checkout
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="non-products">
                    <div className="icon">
                        <FontAwesomeIcon icon={faBagShopping} />
                    </div>
                    <div className="information">
                        <p> There are no products in your cart!</p>
                    </div>
                </div>
            )}
        </HeaderPageRoute>
    );
}

export default CartPage;
