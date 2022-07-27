import './HospitalBed.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import SortByControl from '../../../components/SortByControl';
import { Products } from '../../../data';

function HospitalBed() {
    const filterHospitalBedArr = [...Products].filter((obj) => obj.nameProduct.match(/Hospital/i));

    return (
        <div className="hospital-bed-products">
            <div className="hospital-bed-products-heading">
                <div className="container">
                    <h2 className="hospital-bed-products-title">HOSPITAL BED</h2>
                    <span>
                        <Link to={'/'}>HOME</Link>
                    </span>
                    <span>
                        <Link to={'/'}>/ COLLECTION</Link>
                    </span>
                    <span>/ HOSPITAL BED</span>
                </div>
            </div>
            <div className="all-hospital-bed-product">
                <SortByControl filterHospitalBedArr={filterHospitalBedArr} />
            </div>
        </div>
    );
}

export default HospitalBed;
