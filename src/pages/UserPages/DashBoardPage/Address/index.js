import React from 'react';
import './Address.scss';

function Address() {
    return (
        <div className="address">
            <div className="address-heading">
                <h3>Address</h3>
                <button className="add-btn">Add</button>
            </div>

            <div className="address-notification">You have no saved address!</div>
        </div>
    );
}

export default Address;
