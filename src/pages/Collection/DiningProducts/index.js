import './DiningProducts.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import SortByControl from '../../../components/SortByControl';
import { Products } from '../../../data';

function DiningProducts() {
    const filterDiningArr = [...Products].filter((obj) => obj.nameProduct.match(/Dining/i));

    return (
        <div className="dining-products">
            <div className="dining-products-heading">
                <div className="container">
                    <h2 className="dining-products-title">DINING</h2>
                    <span>
                        <Link to={'/'}>HOME</Link>
                    </span>
                    <span>
                        <Link to={'/'}>/ COLLECTION</Link>
                    </span>
                    <span>/ DINING</span>
                </div>
            </div>
            <div className="all-dining-product">
                <SortByControl filterDiningArr={filterDiningArr} />
            </div>
        </div>
    );
}

export default DiningProducts;
