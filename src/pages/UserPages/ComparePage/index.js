import './ComparePage.scss';
import React from 'react';
import HeaderPageRoute from '../../../components/HeaderPageRoute';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../CartPage/CartSlice';
import { compareActions } from './CompareSlice';

function ComparePage() {
    const dispatch = useDispatch();
    const productCompare = useSelector((state) => state.compare.listProductCompare);
    console.log(productCompare);

    const clickAddtoCart = (id) => {
        const itemAddtoCart = productCompare.find((item) => item.id === id);
        if (itemAddtoCart.status !== 'stock out') {
            dispatch(cartActions.addToCart(itemAddtoCart));
        }
    };

    const clickRemoveFromCompare = (id) => {
        dispatch(compareActions.removeFromCompare(id));
    };

    return (
        <HeaderPageRoute>
            {productCompare.length > 0 ? (
                <table className="compare">
                    <tbody className="compare__body">
                        <tr className="compare__row">
                            <td className="compare__head">Product</td>
                            {productCompare.map((item) => (
                                <td className="compare__product" key={item.id}>
                                    <button className="trash-btn" onClick={() => clickRemoveFromCompare(item.id)}>
                                        <FontAwesomeIcon icon={faTrashCan} />
                                    </button>
                                    <div className="compare__product-img">
                                        <img src={item.img} alt={item.alt} />
                                    </div>
                                    <div className="compare__product-name">{item.nameProduct}</div>
                                </td>
                            ))}
                        </tr>
                        <tr className="compare__row">
                            <td className="compare__head">Description</td>
                            {productCompare.map((item) => (
                                <td key={item.id} className="compare__description">
                                    {item.description}
                                </td>
                            ))}
                        </tr>
                        <tr className="compare__row">
                            <td className="compare__head">Price</td>
                            {productCompare.map((item) => (
                                <td key={item.id} className="compare__price">
                                    {item.newPrice}
                                </td>
                            ))}
                        </tr>
                        <tr className="compare__row">
                            <td className="compare__head">Variants</td>
                            {productCompare.map((item) => (
                                <td key={item.id} className="compare__variants">
                                    -
                                </td>
                            ))}
                        </tr>
                        <tr className="compare__row">
                            <td className="compare__head">Stock</td>
                            {productCompare.map((item) => (
                                <td
                                    key={item.id}
                                    className={
                                        item.status === 'stock out'
                                            ? 'compare__stock out-of-stock-style'
                                            : 'compare__stock'
                                    }
                                >
                                    {item.status === 'stock out' ? 'Out of Stock' : item.status}
                                </td>
                            ))}
                        </tr>
                        <tr className="compare__row">
                            <td className="compare__head">Add to Cart</td>
                            {productCompare.map((item) => (
                                <td key={item.id} className="compare__product__add-to-cart">
                                    <div
                                        className={item.status === 'stock out' ? 'unable-click' : 'add-to-cart-btn'}
                                        onClick={() => clickAddtoCart(item.id)}
                                    >
                                        {item.status === 'stock out' ? item.chooseBtn : 'Add to Cart'}
                                    </div>
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            ) : (
                <div className="non-products">
                    <div className="icon">
                        <FontAwesomeIcon icon={faBagShopping} />
                    </div>
                    <div className="information">
                        <p> There are no products in your compare list!</p>
                    </div>
                </div>
            )}
        </HeaderPageRoute>
    );
}

export default ComparePage;
