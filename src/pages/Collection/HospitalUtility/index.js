import './HospitalUtility.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import SortByControl from '../../../components/SortByControl';
import { Products } from '../../../data';

function HospitalUtility() {
    const filterHospitalUtilityArr = [...Products].filter((obj) => obj.nameProduct.match(/wheelchair/i));

    return (
        <div className="hospital-utility-products">
            <div className="hospital-utility-products-heading">
                <div className="container">
                    <h2 className="hospital-utility-products-title">HOSPITAL UTILITY</h2>
                    <span>
                        <Link to={'/'}>HOME</Link>
                    </span>
                    <span>
                        <Link to={'/'}>/ COLLECTION</Link>
                    </span>
                    <span>/ HOSPITAL UTILITY</span>
                </div>
            </div>
            <SortByControl filterHospitalUtilityArr={filterHospitalUtilityArr} />
        </div>
    );
}

export default HospitalUtility;
