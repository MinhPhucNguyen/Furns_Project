import './WishlistPage.scss';
import React from 'react';
import HeaderPageRoute from '../../../components/HeaderPageRoute';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';

import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import WishlistItem from './WishlistItem';

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
        display: 'Add to Cart',
    },
    {
        id: '5',
        display: 'Action',
    },
];

function WishlistPage() {
    const wishlistArr = useSelector((state) => state.wishlist.wishlistProducts);

    return (
        <HeaderPageRoute>
            {wishlistArr.length > 0 ? (
                <div className="table-product">
                    <div className="table-product-container">
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
                                {wishlistArr.map((item) => (
                                    <WishlistItem
                                        key={item.id}
                                        id={item.id}
                                        img={item.img}
                                        alt={item.alt}
                                        nameProduct={item.name}
                                        newPrice={item.price}
                                        quantity={item.quantity}
                                        total={item.totalPrice}
                                        chooseBtn={item.chooseBtn}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <div className="non-products">
                    <div className="icon">
                        <FontAwesomeIcon icon={faBagShopping} />
                    </div>
                    <div className="information">
                        <p> There are no products in your wishlist!</p>
                    </div>
                </div>
            )}
        </HeaderPageRoute>
    );
}

export default WishlistPage;
