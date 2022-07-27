import React, { useEffect, useState } from 'react';
import './SortByControl.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import Product from '../../components/OurProducts/Product';

import { Products } from '../../data';

const softMenu = [
    {
        id: '1',
        display: 'Relevance',
    },
    {
        id: '2',
        display: 'Name (A - Z)',
    },
    {
        id: '3',
        display: 'Name (Z - A)',
    },
    {
        id: '4',
        display: 'Price (Low - High)',
    },
    {
        id: '5',
        display: 'Price (High - Low)',
    },
];

function SortByControl({
    filterBedroomArr,
    filterDiningArr,
    filterLivingArr,
    filterLoungeArr,
    filterOfficeChairArr,
    filterHospitalBedArr,
    filterHospitalUtilityArr,
}) {
    const [clickOpenDropdown, setClickOpenDropdown] = useState(false);
    const [chooseItem, setChooseItem] = useState('1');
    const [value, setValue] = useState('Relevance');
    // const [dataFilter, setDataFilter] = useState([]);
    const [softByArrayProduct, setSoftByArrayProduct] = useState([]);

    // dataFilter is Array
    const dataFilter =
        window.location.pathname === '/products'
            ? Products
            : window.location.pathname === '/collection/bedroom'
            ? filterBedroomArr
            : window.location.pathname === '/collection/dining'
            ? filterDiningArr
            : window.location.pathname === '/collection/living'
            ? filterLivingArr.length > 0
                ? filterLivingArr
                : []
            : window.location.pathname === '/collection/lounge'
            ? filterLoungeArr
            : window.location.pathname === '/collection/office-chair'
            ? filterOfficeChairArr
            : window.location.pathname === '/collection/hospital-bed'
            ? filterHospitalBedArr
            : window.location.pathname === '/collection/hospital-utility'
            ? filterHospitalUtilityArr
            : [];

    // useEffect(() => {
    //     switch (window.location.pathname) {
    //         case '/products':
    //             setDataFilter(Products);
    //             break;
    //         case '/collection/bedroom':
    //             setDataFilter(filterBedroomArr);
    //             break;
    //         case '/collection/dining':
    //             setDataFilter(filterDiningArr);
    //             break;
    //         case '/collection/living':
    //             setDataFilter(filterLivingArr);
    //             break;
    //         case '/collection/lounge':
    //             setDataFilter(filterLoungeArr);
    //             break;
    //         case '/collection/office-chair':
    //             setDataFilter(filterOfficeChairArr);
    //             break;
    //         case '/collection/hospital-bed':
    //             setDataFilter(filterHospitalBedArr);
    //             break;
    //         case '/collection/hospital-utility':
    //             setDataFilter(filterHospitalUtilityArr);
    //             break;
    //         default:
    //             setDataFilter([]);
    //     }
    // }, [window.location.pathname]);
    // console.log(dataFilter);

    // Open/Close Dropdown
    const handleClick = () => {
        setClickOpenDropdown((e) => !e);
    };

    //Choose Item
    const handleChooseItem = (e) => {
        setChooseItem(e.id);
        setValue(e.display);
        setClickOpenDropdown(false);
    };

    //Soft nameProduct (A-Z)
    // If return value of compare a > b is greater than 0, then ( b before a )
    const arrayAscending = [...dataFilter].sort((a, b) => (a.nameProduct > b.nameProduct ? 1 : -1));

    //Soft nameProduct (Z-A)
    // If return value of compare a > b is less than 0, then ( a before b )
    const arrayDiscending = [...dataFilter].sort((a, b) => (a.nameProduct > b.nameProduct ? -1 : 1));

    //Soft priceProduct (Low-High)
    const priceAscending = [...dataFilter].sort((a, b) => a.newPrice.substring(1) - b.newPrice.substring(1));

    //Soft priceProduct (High-Low)
    const priceDiscending = [...dataFilter].sort((a, b) => b.newPrice.substring(1) - a.newPrice.substring(1));

    // Soft Product in Array
    useEffect(() => {
        switch (chooseItem) {
            case '1':
                setSoftByArrayProduct(dataFilter);
                break;
            case '2':
                setSoftByArrayProduct(arrayAscending);
                break;
            case '3':
                setSoftByArrayProduct(arrayDiscending);
                break;
            case '4':
                setSoftByArrayProduct(priceAscending);
                break;
            case '5':
                setSoftByArrayProduct(priceDiscending);
                break;
            default:
                setSoftByArrayProduct(dataFilter);
        }

        return () => {
            setSoftByArrayProduct([]);
        };
    }, [chooseItem]);

    return (
        <div className="all-product">
            {softByArrayProduct.length > 0 ? (
                <>
                    <div className="product-sort">
                        <div className="quantity-product">
                            <span>
                                Showing <span>{dataFilter.length}</span>
                                products
                            </span>
                        </div>
                        <div className="product-soft-by">
                            <label>Sort by</label>
                            <div className={'soft-by-control ' + (clickOpenDropdown ? 'active-border' : '')}>
                                <div className="soft-by-value">{value}</div>
                                <div className="dropdown-icon " onClick={handleClick}>
                                    <FontAwesomeIcon icon={faAngleDown} className="arrow-icon" />
                                </div>
                            </div>
                            <ul className={'soft-by-control-menu ' + (clickOpenDropdown ? 'show-dropdown' : '')}>
                                {softMenu.map((item, index) => (
                                    <li
                                        key={index}
                                        className={chooseItem === item.id ? 'control-item choosen' : 'control-item '}
                                        onClick={() => handleChooseItem(item)}
                                    >
                                        {item.display}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="products-relevance">
                        {softByArrayProduct.map((item, index) => (
                            <Product
                                key={index}
                                id={item.id}
                                nameProduct={item.nameProduct}
                                img={item.img}
                                alt={item.alt}
                                percentSale={item.percentSale}
                                status={item.status}
                                chooseBtn={item.chooseBtn}
                                oldPrice={item.oldPrice}
                                newPrice={item.newPrice}
                            />
                        ))}
                    </div>
                </>
            ) : (
                <div className="non-products">
                    <div className="icon">
                        <FontAwesomeIcon icon={faBagShopping} />
                    </div>
                    <div className="information">
                        <p> There are no products!</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SortByControl;
