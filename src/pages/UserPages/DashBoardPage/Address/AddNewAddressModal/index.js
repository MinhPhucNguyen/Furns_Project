import React from 'react';
import './AddNewAddressModal.scss';

function AddNewAddressModal({ setOpenAddNewAddressModal }) {
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
                        <input name="firstnameInput" className="firstnameInput" />
                    </div>
                    <div className="row-item">
                        <label htmlFor="lastnameInput">Last Name</label>
                        <input name="lastnameInput" className="lastnameInput" />
                    </div>
                </div>
                <div className="form_add_new_address_row">
                    <div className="row-item">
                        <label htmlFor="AddressInput">Address</label>
                        <input name="AddressInput" className="AddressInput" />
                    </div>
                </div>
                <div className="form_add_new_address_row">
                    <div className="row-item">
                        <label htmlFor="ApartmentInput">Apartment, suite, etc.</label>
                        <input name="ApartmentInput" className="ApartmentInput" />
                    </div>
                </div>
                <div className="form_add_new_address_row">
                    <div className="row-item">
                        <label htmlFor="CityInput">City</label>
                        <input name="CityInput" className="CityInput" />
                    </div>
                </div>
                <div className="form_add_new_address_row">
                    <div className="row-item">
                        <label htmlFor="CountryInput">Country</label>
                        <input name="CountryInput" className="CountryInput" />
                    </div>
                    <div className="row-item">
                        <label htmlFor="PostalCodeInput">Postal code</label>
                        <input name="PostalCodeInput" className="PostalCodeInput" />
                    </div>
                </div>
                <div className="row-btn">
                    <button className="Cancel_btn" onClick={() => setOpenAddNewAddressModal(false)}>
                        Cancel
                    </button>
                    <button className="Save_btn">Save</button>
                </div>
            </div>
        </div>
    );
}

export default AddNewAddressModal;
