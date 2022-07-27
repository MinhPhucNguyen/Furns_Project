import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductsPage.scss';
import SortByControl from '../../components/SortByControl';

function ProductsPage() {
    const [clickOpenDropdown, setClickOpenDropdown] = useState(false);

    const handleClick = () => {
        setClickOpenDropdown((e) => !e);
    };

    return (
        <div
            className="products-page"
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    if (clickOpenDropdown === true) {
                        handleClick();
                    }
                }
            }}
        >
            <div className="products-heading">
                <div className="container">
                    <h2 className="products-page-title">PRODUCTS</h2>
                    <span>
                        <Link to={'/'}>HOME</Link>
                    </span>
                    <span>/ SHOP</span>
                </div>
            </div>
            <SortByControl />
        </div>
    );
}

export default ProductsPage;
