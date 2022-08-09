import React, { useState } from 'react';
import AddNewAddressModal from './AddNewAddressModal';
import './Address.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

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

            {/* <div className="address-notification">You have no saved address!</div> */}
            <div className="contain_new_address">
                <div className="address_item">
                    <div className="address_box">
                        <div className="info_address">
                            <h4>Phúc Nguyễn</h4>
                            <p>abc, abc, abc-123456</p>
                        </div>
                        <div className="trash_btn">
                            <FontAwesomeIcon icon={faTrashCan} />
                        </div>
                    </div>
                </div>
            </div>

            {openAddNewAddressModal && <AddNewAddressModal setOpenAddNewAddressModal={setOpenAddNewAddressModal} />}
        </div>
    );
}

export default Address;
