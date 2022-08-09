import React, { useState } from 'react';
import AddNewAddressModal from './AddNewAddressModal';
import './Address.scss';

function Address() {
    const [openAddNewAddressModal, setOpenAddNewAddressModal] = useState(false);

    return (
        <div className="address">
            <div className="address-heading">
                <h3>Address</h3>
                <button
                    className="add-btn"
                    onClick={() => {
                        setOpenAddNewAddressModal(!openAddNewAddressModal);
                    }}
                >
                    Add
                </button>
            </div>

            <div className="address-notification">You have no saved address!</div>

            {openAddNewAddressModal && <AddNewAddressModal setOpenAddNewAddressModal={setOpenAddNewAddressModal} />}
        </div>
    );
}

export default Address;
