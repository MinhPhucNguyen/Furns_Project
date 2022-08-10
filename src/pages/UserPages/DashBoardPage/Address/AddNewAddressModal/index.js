import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addressAction } from '../AddressSlice';
import './AddNewAddressModal.scss';

function AddNewAddressModal({ setOpenAddNewAddressModal }) {
    const [firstnameUser, setFirstnameUser] = useState('');
    const [lastnameUser, setLastnameUser] = useState('');
    const [address, setAddress] = useState('');
    const [apartment, setApartment] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');

    const dispatch = useDispatch();

    const handleSaveInfoAddress = () => {
        dispatch(
            addressAction.saveAddress({
                firstnameUser,
                lastnameUser,
                address,
                apartment,
                city,
                postalCode,
            }),
        );

        setOpenAddNewAddressModal(false);
    };

    return (
        <div
            className="add_new_address"
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    setOpenAddNewAddressModal(false);
                }
            }}
        >
            <div className="form_add_new_address">
                <div className="form_add_new_address_heading">
                    <h2>Add new Address</h2>
                </div>
                <div className="form_add_new_address_row">
                    <div className="row-item">
                        <label htmlFor="firstnameInput">First Name</label>
                        <input
                            name="firstnameInput"
                            className="firstnameInput"
                            value={firstnameUser}
                            onChange={(e) => setFirstnameUser(e.target.value)}
                        />
                    </div>
                    <div className="row-item">
                        <label htmlFor="lastnameInput">Last Name</label>
                        <input
                            name="lastnameInput"
                            className="lastnameInput"
                            value={lastnameUser}
                            onChange={(e) => setLastnameUser(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form_add_new_address_row">
                    <div className="row-item">
                        <label htmlFor="AddressInput">Address</label>
                        <input
                            name="AddressInput"
                            className="AddressInput"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form_add_new_address_row">
                    <div className="row-item">
                        <label htmlFor="ApartmentInput">Apartment, suite, etc.</label>
                        <input
                            name="ApartmentInput"
                            className="ApartmentInput"
                            value={apartment}
                            onChange={(e) => setApartment(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form_add_new_address_row">
                    <div className="row-item">
                        <label htmlFor="CityInput">City</label>
                        <input
                            name="CityInput"
                            className="CityInput"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form_add_new_address_row">
                    <div className="row-item">
                        <label htmlFor="CountryInput">Country</label>
                        <input name="CountryInput" className="CountryInput" />
                    </div>
                    <div className="row-item">
                        <label htmlFor="PostalCodeInput">Postal code</label>
                        <input
                            name="PostalCodeInput"
                            className="PostalCodeInput"
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row-btn">
                    <button className="Cancel_btn" onClick={() => setOpenAddNewAddressModal(false)}>
                        Cancel
                    </button>
                    <button className="Save_btn" onClick={handleSaveInfoAddress}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddNewAddressModal;
