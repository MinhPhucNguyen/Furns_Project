import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './HeaderPageRoute.scss';

function HeaderPageRoute({ children }) {
    const [title, setTitle] = useState('');
    const [subTitle, setSubTitle] = useState('');
    let location = useLocation();

    useEffect(() => {
        switch (location.pathname) {
            case '/signin':
                setTitle('LOGIN');
                setSubTitle('SIGNIN');
                break;
            case '/cart':
                setTitle('CART');
                setSubTitle('CART');
                break;
            case '/signup':
                setTitle('CREATE ACCOUNT');
                setSubTitle('SIGN UP');
                break;
            case '/wishlist':
                setTitle('WISHLIST');
                setSubTitle('WISHLIST');
                break;
            case '/compare':
                setTitle('COMPARE');
                setSubTitle('COMPARE');
                break;
            default:
                setTitle('');
                setSubTitle('');
        }

        return () => {
            setTitle('');
            setSubTitle('');
        };
    }, [location.pathname]);

    return (
        <div className="header-page-route">
            <div className="header-page-route-container">
                <div className="container">
                    <h2 className="header-page-route-title">{title}</h2>
                    <span>
                        <Link to={'/'}>HOME</Link>
                    </span>
                    <span>/ {subTitle}</span>
                </div>
            </div>
            <div className="main-content">{children}</div>
        </div>
    );
}

export default HeaderPageRoute;
