import React, { useEffect, useState } from 'react';
import AddNewAddressModal from './AddNewAddressModal';
import './Address.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { addressAction } from './AddressSlice';

function Address() {
    const dispatch = useDispatch();
    const [openAddNewAddressModal, setOpenAddNewAddressModal] = useState(false);
    const userAddressList = useSelector((state) => state.address.addressList);

    useEffect(() => {
        if (openAddNewAddressModal === true) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [openAddNewAddressModal]);

    const handleRemoveAddress = (id) => {
        dispatch(addressAction.removeAddress(id));
    };

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

            {userAddressList.length === 0 ? (
                <div className="address-notification">You have no saved address!</div>
            ) : (
                <div className="contain_new_address">
                    {userAddressList.map((item) => (
                        <div className="address_item" key={item.id}>
                            <div className="address_box">
                                <div className="info_address">
                                    <h4>{item.firstnameUser + ' ' + item.lastnameUser}</h4>
                                    <p>
                                        {item.address}, {item.apartment}, {item.city}-{item.postalCode}
                                    </p>
                                </div>
                                <div className="trash_btn" onClick={() => handleRemoveAddress(item.id)}>
                                    <FontAwesomeIcon icon={faTrashCan} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {openAddNewAddressModal && <AddNewAddressModal setOpenAddNewAddressModal={setOpenAddNewAddressModal} />}
        </div>
    );
}

export default Address;
