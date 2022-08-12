import React, { useEffect, useState } from 'react';
import './OurProducts.scss';
import TabProductList from '../TabProductList';
import Product from './Product';
import { Products } from '../../data';

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
                setData(Products.slice(0, 8));
                break;
            case 'featured':
                setData(Products.slice(Math.floor(Math.random() * Products.length)));
                break;
            case 'sale':
                setData(Products.filter((item) => item.percentSale !== ''));
                break;
            case 'tending':
                setData(Products.slice(Math.floor(Math.random() * Products.length)));
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
                        {data.map((item) => (
                            <Product
                                key={item.id}
                                id={item.id}
                                nameProduct={item.nameProduct}
                                img={item.img}
                                alt={item.alt}
                                percentSale={item.percentSale}
                                status={item.status}
                                chooseBtn={item.chooseBtn}
                                oldPrice={item.oldPrice}
                                newPrice={item.newPrice}
                                data={data}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurProducts;
