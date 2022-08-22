import './LoungeProducts.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import SortByControl from '../../../components/SortByControl';
import { Products } from '../../../data';

function LoungeProducts() {
    const filterLoungeArr = [...Products].filter((obj) => obj.nameProduct.match(/Lounge/i));

    return (
        <div className="lounge-products">
            <div className="lounge-products-heading">
                <div className="container">
                    <h2 className="lounge-products-title">LOUNGE</h2>
                    <span>
                        <Link to={'/'}>HOME</Link>
                    </span>
                    <span>
                        <Link to={'/'}>/ COLLECTION</Link>
                    </span>
                    <span>/ LOUNGE</span>
                </div>
            </div>
            <SortByControl filterLoungeArr={filterLoungeArr} />
        </div>
    );
}

export default LoungeProducts;
