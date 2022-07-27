import './OfficeChair.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import SortByControl from '../../../components/SortByControl';
import { Products } from '../../../data';

function OfficeChair() {
    const filterOfficeChairArr = [...Products].filter((obj) => obj.nameProduct.match(/chair/i));

    return (
        <div className="office-chair-products">
            <div className="office-chair-products-heading">
                <div className="container">
                    <h2 className="office-chair-products-title">OFFICE CHAIR</h2>
                    <span>
                        <Link to={'/'}>HOME</Link>
                    </span>
                    <span>
                        <Link to={'/'}>/ COLLECTION</Link>
                    </span>
                    <span>/ OFFICE CHAIR</span>
                </div>
            </div>
            <div className="all-office-chair-product">
                <SortByControl filterOfficeChairArr={filterOfficeChairArr} />
            </div>
        </div>
    );
}

export default OfficeChair;
