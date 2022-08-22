import './BedroomProducts.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import SortByControl from '../../../components/SortByControl';
import { Products } from '../../../data';

function BedroomProducts() {
    const filterBedroomArr = [...Products].filter((obj) => obj.nameProduct.match(/Bed/i));

    return (
        <div className="bedroom-products">
            <div className="bedroom-products-heading">
                <div className="container">
                    <h2 className="bedroom-products-title">BEDROOM</h2>
                    <span>
                        <Link to={'/'}>HOME</Link>
                    </span>
                    <span>
                        <Link to={'/'}>/ COLLECTION</Link>
                    </span>
                    <span>/ BEDROOM</span>
                </div>
            </div>
            <SortByControl filterBedroomArr={filterBedroomArr} />
        </div>
    );
}

export default BedroomProducts;
