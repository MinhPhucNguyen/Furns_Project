import './LivingProducts.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import SortByControl from '../../../components/SortByControl';
import { Products } from '../../../data';

function BedroomProducts() {
    const filterLivingArr = [...Products].filter((obj) => obj.nameProduct.match(/Living/i));

    return (
        <div className="living-products">
            <div className="living-products-heading">
                <div className="container">
                    <h2 className="living-products-title">LIVING</h2>
                    <span>
                        <Link to={'/'}>HOME</Link>
                    </span>
                    <span>
                        <Link to={'/'}>/ COLLECTION</Link>
                    </span>
                    <span>/ LIVING</span>
                </div>
            </div>
            <div className="all-living-product">
                <SortByControl filterLivingArr={filterLivingArr} />
            </div>
        </div>
    );
}

export default BedroomProducts;
