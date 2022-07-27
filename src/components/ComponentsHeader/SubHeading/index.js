import React from 'react';
import './SubHeading.scss';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const languageItem = [
    {
        id: 1,
        display: 'English',
        currency: 'USD',
    },
    {
        id: 2,
        display: 'Italian',
        currency: 'EUR',
    },
    {
        id: 3,
        display: 'Spainish',
        currency: 'POUND',
    },
    {
        id: 4,
        display: 'Vietnamese',
        currency: 'VNĐ',
    },
];

function SubHeading() {
    const [menuOpenLanguage, setMenuOpenLanguage] = useState(false);
    const [menuOpenCurrency, setMenuOpenCurrency] = useState(false);
    const [chooseItemLanguage, setChooseItemLanguage] = useState('English');
    const [chooseItemCurrency, setChooseItemCurrency] = useState('USD');

    const clickOpenMenuLanguage = () => {
        setMenuOpenLanguage((e) => !e);
    };

    const clickOpenMenuCurrency = () => {
        setMenuOpenCurrency((e) => !e);
    };

    const handleChooseItemLanguage = (item) => {
        setChooseItemLanguage(item.display);
        setMenuOpenLanguage(false);
    };

    const hadnleChooseItemCurrency = (item) => {
        setChooseItemCurrency(item.currency);
        setMenuOpenCurrency(false);
    };

    return (
        <div className="sub-heading">
            <div className="container">
                <div className="left">Default Welcome Message</div>
                <div className="right">
                    <div className="languages">
                        <div className="language-btn" onClick={clickOpenMenuLanguage}>
                            <span className="display-language">{chooseItemLanguage}</span>
                            <span>
                                {menuOpenLanguage ? (
                                    <FontAwesomeIcon icon={faAngleUp} className="icon" />
                                ) : (
                                    <FontAwesomeIcon icon={faAngleDown} className="icon" />
                                )}
                            </span>
                        </div>
                        {menuOpenLanguage && (
                            <ul className="language-list">
                                {languageItem.map((item) => (
                                    <li className="language-item" onClick={() => handleChooseItemLanguage(item)}>
                                        <span key={item.id}>{item.display}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="currency-unit">
                        <div className="currency-btn" onClick={clickOpenMenuCurrency}>
                            <span>{chooseItemCurrency}</span>
                            <span>
                                {menuOpenCurrency ? (
                                    <FontAwesomeIcon icon={faAngleUp} className="icon" />
                                ) : (
                                    <FontAwesomeIcon icon={faAngleDown} className="icon" />
                                )}
                            </span>
                        </div>
                        {menuOpenCurrency && (
                            <ul className="currency-list">
                                {languageItem.map((item) => (
                                    <li className="currency-item" onClick={() => hadnleChooseItemCurrency(item)}>
                                        <span key={item.id}>{item.currency}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubHeading;
