import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Products } from '../../data';
import './ProductDetail.scss';

function ProductDetail() {
    const { idProduct } = useParams();
    const productDetail = Products.find((item) => item.id === parseInt(idProduct));
    console.log(productDetail);

    return (
        <div className="header-page-route">
            <div className="header-page-route-container">
                <div className="container">
                    <h2 className="header-page-route-title">{productDetail.nameProduct}</h2>
                    <div>
                        <span>
                            <Link to={'/'}>HOME</Link>
                        </span>
                        <span>/ PRODUCT</span>
                        <span className="title-path">/ {productDetail.nameProduct}</span>
                    </div>
                </div>
            </div>
            <div className="main-content"></div>
        </div>
    );
}

export default ProductDetail;
