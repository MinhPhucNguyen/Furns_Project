import './OurProducts.scss';

import React, { useEffect, useState } from 'react';
import { newArrival, Featured, onSale, Tending } from '../../data';

import TabProductList from '../TabProductList';
import Product from './Product';

const tabList = [
    {
        id: 'arrival',
        title: 'New Arrival',
    },
    {
        id: 'featured',
        title: 'Featured',
    },
    {
        id: 'sale',
        title: 'On Sale',
    },
    {
        id: 'tending',
        title: 'Tending',
    },
];

function OurProducts() {
    const [selected, setSelected] = useState('arrival');
    const [data, setData] = useState([]);

    useEffect(() => {
        switch (selected) {
            case 'arrival':
                setData(newArrival);
                break;
            case 'featured':
                setData(Featured);
                break;
            case 'sale':
                setData(onSale);
                break;
            case 'tending':
                setData(Tending);
                break;
            default:
                setData([]);
        }

        return () => {
            setData([]);
        };
    }, [selected]);

    return (
        <div className="our-products">
            <div className="container">
                <div className="heading">
                    <h2>Our Products</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut
                        labore
                    </p>
                </div>
                <div className="our-product-list">
                    <ul className="tab-product-list">
                        {tabList.map((obj) => (
                            <TabProductList
                                key={obj.id}
                                title={obj.title}
                                active={selected === obj.id}
                                setSelected={setSelected}
                                id={obj.id}
                            />
                        ))}
                    </ul>
                    <div className="products">
                        {data.map((item, index) => (
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
                </div>
            </div>
        </div>
    );
}

export default OurProducts;
