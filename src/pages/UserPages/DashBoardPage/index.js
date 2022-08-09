import React, { useEffect, useState } from 'react';
import './DashBoardPage.scss';
import HeaderPageRoute from '../../../components/HeaderPageRoute';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGaugeHigh,
    faBagShopping,
    faAddressCard,
    faGear,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import DashBoard from './DashBoard';
import Orders from './Orders';
import Address from './Address';
import SettingCompo from './SettingCompo';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase/firebaseConfig';
import { signOut } from 'firebase/auth';

const dashBoardPageData = [
    { id: 1, display: 'DASHBOARD', icon: faGaugeHigh },
    { id: 2, display: 'ORDERS', icon: faBagShopping },
    { id: 3, display: 'ADDRESS', icon: faAddressCard },
    { id: 4, display: 'SETTINGS', icon: faGear },
    { id: 5, display: 'LOGOUT', icon: faRightFromBracket },
];

function DashBoardPage() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(1);

    useEffect(() => {
        setOpen(open);
    }, [open]);

    const handleClickLogOut = () => {
        signOut(auth)
            .then(() => {
                navigate('/');
            })
            .catch((err) => {
                alert(err);
            });
    };

    return (
        <HeaderPageRoute>
            <div className="dashboard-container">
                <div className="dashboard-left">
                    <ul className="dashboard-control-list">
                        {dashBoardPageData.map((item) => (
                            <li
                                className={'dashboard-control-item ' + (item.id === open && 'display')}
                                key={item.id}
                                onClick={() => {
                                    if (item.id === 5) {
                                        handleClickLogOut();
                                    }
                                    setOpen(item.id);
                                }}
                            >
                                <FontAwesomeIcon icon={item.icon} className="dashboard-icon" />
                                {item.display}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="dashboard-right">
                    <div className="dashboard-right-container">
                        {open === 1 ? (
                            <DashBoard />
                        ) : open === 2 ? (
                            <Orders />
                        ) : open === 3 ? (
                            <Address />
                        ) : open === 4 ? (
                            <SettingCompo />
                        ) : (
                            <DashBoard />
                        )}
                    </div>
                </div>
            </div>
        </HeaderPageRoute>
    );
}

export default DashBoardPage;
