import './SidebarSetting.scss';
import React from 'react';
import logo from '../../../../images/75.png';
import { Link } from 'react-router-dom';

function SidebarSetting({ setSidebarSettingOpen }) {
    return (
        <div
            className="sidebar_setting"
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    setSidebarSettingOpen(false);
                }
            }}
        >
            <div className="sidebar_setting__container">
                <div className="sidebar_setting__heading">
                    <div className="sidebar_setting__heading-logo">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div
                        className="sidebar_setting__heading-close-icon"
                        onClick={() => {
                            setSidebarSettingOpen(false);
                        }}
                    >
                        <div className="close-1"></div>
                        <div className="close-2"></div>
                    </div>
                </div>
                <div className="sidebar_setting__body">
                    <div className="sidebar_setting__body-selection-language">
                        <label htmlFor="language" className="selection-language__label">
                            Language
                        </label>
                        <select name="language" className="select-language">
                            <option className="first-option" value="0">
                                Select...
                            </option>
                            <option>Vietnamese</option>
                            <option>English</option>
                            <option>Italian</option>
                            <option>Spainish</option>
                        </select>
                    </div>
                    <div className="sidebar_setting__body-selection-currency">
                        <label htmlFor="currency" className="selection-currency__label">
                            Currency
                        </label>
                        <select name="currency" className="select-currency">
                            <option className="first-option">Select...</option>
                            <option>VNĐ</option>
                            <option>EUR</option>
                            <option>POUND</option>
                            <option>USD</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SidebarSetting;
