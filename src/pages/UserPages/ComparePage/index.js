import './ComparePage.scss';
import React from 'react';
import HeaderPageRoute from '../../../components/HeaderPageRoute';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import twistdining from '../../../images/products_img/twistdining.jpg';

function ComparePage() {
    return (
        <HeaderPageRoute>
            <table className="compare">
                <tbody className="compare__body">
                    <tr className="compare__row">
                        <td className="compare__head">Product</td>
                        <td className="compare__product">
                            <button className="trash-btn">
                                <FontAwesomeIcon icon={faTrashCan} />
                            </button>
                            <div className="compare__product-img">
                                <img src={twistdining} alt="twistdining" />
                            </div>
                            <p className="compare__product-name">Twist Dining Table</p>
                        </td>
                        <td className="compare__product">
                            <button className="trash-btn">
                                <FontAwesomeIcon icon={faTrashCan} />
                            </button>
                            <div className="compare__product-img">
                                <img src={twistdining} alt="twistdining" />
                            </div>
                            <p className="compare__product-name">Twist Dining Table</p>
                        </td>
                    </tr>
                    <tr className="compare__row">
                        <td className="compare__head">Description</td>
                        <td className="compare__description">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                            of classical Latin
                        </td>
                        <td className="compare__description">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                            of classical Latin
                        </td>
                    </tr>
                    <tr className="compare__row">
                        <td className="compare__head">Price</td>
                        <td className="compare__price">$288.0</td>
                        <td className="compare__price">$288.0</td>
                    </tr>
                    <tr className="compare__row">
                        <td className="compare__head">Variants</td>
                        <td className="compare__variants">-</td>
                        <td className="compare__variants">-</td>
                    </tr>
                    <tr className="compare__row">
                        <td className="compare__head">Stock</td>
                        <td className="compare__stock">Available</td>
                        <td className="compare__stock">Available</td>
                    </tr>
                    <tr className="compare__row">
                        <td className="compare__head">Add to Cart</td>
                        <td className="compare__product__add-to-cart"></td>
                        <td className="compare__product__add-to-cart"></td>
                    </tr>
                </tbody>
            </table>
        </HeaderPageRoute>
    );
}

export default ComparePage;
