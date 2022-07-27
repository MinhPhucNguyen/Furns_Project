import React from 'react';
import './TabProductList.scss';

function TabProductList({ title, active, setSelected, id }) {
    return (
        <li className={active ? 'tab active' : 'tab'} onClick={() => setSelected(id)}>
            {title}
        </li>
    );
}

export default TabProductList;
