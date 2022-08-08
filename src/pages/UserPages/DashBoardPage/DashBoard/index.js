import React from 'react';
import './DashBoard.scss';

function DashBoard() {
    return (
        <div className="dashboard">
            <div className="dashboard-heading">
                <h3>Dashboard</h3>
            </div>
            <p>
                Hello, <strong>Vivek Monstar.</strong> (If Not <strong>Vivek!</strong> Logout)
            </p>
            <p>
                From your account dashboard. you can easily check & view your recent orders, manage your shipping and
                billing addresses and edit your password and account details.
            </p>
        </div>
    );
}

export default DashBoard;
