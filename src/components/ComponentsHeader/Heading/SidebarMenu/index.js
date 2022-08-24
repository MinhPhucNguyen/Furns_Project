import './SidebarMenu.scss';
import React, { useEffect, useState } from 'react';
import logo from '../../../../images/75.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const sideBarNavMenu = [
    {
        id: 1,
        display: 'Home',
        path: '/',
    },
    {
        id: 2,
        display: 'About',
        path: '/about',
    },
    {
        id: 3,
        display: 'Home Furniture',
        navItem: [
            {
                id: 1,
                navName: 'Bedroom',
                path: '/collection/bedroom',
            },
            {
                id: 2,
                navName: 'Dining',
                path: '/collection/dining',
            },
            {
                id: 3,
                navName: 'Living',
                path: '/collection/living',
            },
        ],
    },
    {
        id: 4,
        display: 'Office Furniture',
        navItem: [
            {
                id: 1,
                navName: 'Lounge',
                path: '/collection/lounge',
            },
            {
                id: 2,
                navName: 'Office Chair',
                path: '/collection/office-chair',
            },
            {
                id: 3,
                navName: 'Office Table',
                path: '/collection/office-table',
            },
        ],
    },
    {
        id: 5,
        display: 'Hospital Furniture',
        navItem: [
            {
                id: 1,
                navName: 'Hospital Bed',
                path: '/collection/hospital-bed',
            },
            {
                id: 2,
                navName: 'Hospital Utility',
                path: '/collection/hospital-utility',
            },
        ],
    },
    {
        id: 6,
        display: 'Contact',
        path: '/contact',
    },
];

function SidebarMenu({ setSidebarMenuOpen }) {
    const [itemNavID, setItemNavID] = useState(3);
    const [itemNavbarOpen, setItemNavbarOpen] = useState(false);

    const handleMenuSideBar = (item) => {
        if (item.path !== undefined) {
            setSidebarMenuOpen(false);
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        } else {
            setItemNavID(item.id);
            if (item.id === itemNavID) {
                setItemNavbarOpen((prev) => !prev);
            }
        }
    };

    console.log(itemNavID);
    console.log(itemNavbarOpen);

    return (
        <div
            className="sidebar_menu"
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    setSidebarMenuOpen(false);
                }
            }}
        >
            <div className="sidebar_menu__container">
                <div className="sidebar_menu__heading">
                    <div className="sidebar_menu__heading-logo">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div
                        className="sidebar_menu__heading-close-icon"
                        onClick={(e) => {
                            if (e.target === e.currentTarget) {
                                setSidebarMenuOpen(false);
                            }
                        }}
                    >
                        <div className="close-1"></div>
                        <div className="close-2"></div>
                    </div>
                </div>

                <div className="sidebar_menu__body">
                    <ul className="nav-list">
                        {sideBarNavMenu.map((item) => (
                            <li className="nav" key={item.id}>
                                <div className="nav-container" onClick={() => handleMenuSideBar(item)}>
                                    <Link to={item.path !== undefined ? item.path : true}>{item.display}</Link>
                                    {item.navItem !== undefined ? (
                                        <FontAwesomeIcon icon={faPlus} className="plus-icon" />
                                    ) : (
                                        true
                                    )}
                                </div>

                                {itemNavbarOpen && itemNavID === item.id ? (
                                    <ul className="item-nav">
                                        {item.navItem.map((obj) => (
                                            <li
                                                key={obj.id}
                                                onClick={() => {
                                                    setSidebarMenuOpen(false);
                                                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                                }}
                                            >
                                                <Link to={obj.path}>{obj.navName}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    true
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SidebarMenu;
