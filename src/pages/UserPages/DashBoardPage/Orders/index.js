import React from 'react';
import './Orders.scss';

function Orders() {
    return (
        <div className="orders">
            <div className="orders-heading">
                <h3>Orders</h3>
            </div>

            <div className="notification">You have no order!</div>
        </div>
    );
}

export default Orders;
