import './OfficeTable.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import SortByControl from '../../../components/SortByControl';
import { Products } from '../../../data';

function LoungeProducts() {
    const filterOfficeTableArr = [...Products].filter((obj) => obj.nameProduct.match(/table/i));

    return (
        <div className="lounge-products">
            <div className="lounge-products-heading">
                <div className="container">
                    <h2 className="lounge-products-title">OFFICE TABLE</h2>
                    <span>
                        <Link to={'/'}>HOME</Link>
                    </span>
                    <span>
                        <Link to={'/'}>/ COLLECTION</Link>
                    </span>
                    <span>/ OFFICE TABLE</span>
                </div>
            </div>
            <SortByControl filterOfficeTableArr={filterOfficeTableArr} />
        </div>
    );
}

export default LoungeProducts;
