import React from 'react';
import { useDispatch } from 'react-redux';
import { addressAction } from '../AddressSlice';
import './AddNewAddressModal.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function AddNewAddressModal({ setOpenAddNewAddressModal }) {
    const dispatch = useDispatch();

    const handleSaveInfoAddress = () => {
        dispatch(
            addressAction.saveAddress({
                firstnameUser: formik.values.firstnameInput,
                lastnameUser: formik.values.lastnameInput,
                address: formik.values.AddressInput,
                apartment: formik.values.ApartmentInput,
                city: formik.values.CityInput,
                postalCode: formik.values.PostalCodeInput,
            }),
        );
        setOpenAddNewAddressModal(false);
    };

    const formik = useFormik({
        initialValues: {
            firstnameInput: '',
            lastnameInput: '',
            AddressInput: '',
            ApartmentInput: '',
            CityInput: '',
            CountryInput: '',
            PostalCodeInput: '',
        },

        validationSchema: Yup.object({
            firstnameInput: Yup.string().required('*Please fill out this field.'),
            lastnameInput: Yup.string().required('*Please fill out this field.'),
            AddressInput: Yup.string().required('*Please fill out this field.'),
            ApartmentInput: Yup.string().required('*Please fill out this field.'),
            CountryInput: Yup.string().required('*Please fill out this field.'),
            CityInput: Yup.string().required('*Please fill out this field.'),
            PostalCodeInput: Yup.string().required('*Please fill out this field.'),
        }),

        onSubmit: (values) => {
            console.log(values);
        },
    });

    console.log(Object.keys(formik.errors).length === 0 && formik.errors.constructor === Object);

    return (
        <div
            className="add_new_address"
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    setOpenAddNewAddressModal(false);
                }
            }}
        >
            <form className="form_add_new_address" onSubmit={formik.handleSubmit}>
                <div className="form_add_new_address_heading">
                    <h2>Add new Address</h2>
                </div>
                <div className="form_add_new_address_row">
                    <div className="row-item">
                        <label htmlFor="firstnameInput">First Name</label>
                        <input
                            name="firstnameInput"
                            className="firstnameInput"
                            value={formik.values.firstnameInput}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.firstnameInput && (
                            <div className="address_err_message">{formik.errors.firstnameInput}</div>
                        )}
                    </div>
                    <div className="row-item">
                        <label htmlFor="lastnameInput">Last Name</label>
                        <input
                            name="lastnameInput"
                            className="lastnameInput"
                            value={formik.values.lastnameInput}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.lastnameInput && (
                            <div className="address_err_message">{formik.errors.lastnameInput}</div>
                        )}
                    </div>
                </div>
                <div className="form_add_new_address_row">
                    <div className="row-item">
                        <label htmlFor="AddressInput">Address</label>
                        <input
                            name="AddressInput"
                            className="AddressInput"
                            value={formik.values.AddressInput}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.AddressInput && (
                            <div className="address_err_message">{formik.errors.AddressInput}</div>
                        )}
                    </div>
                </div>
                <div className="form_add_new_address_row">
                    <div className="row-item">
                        <label htmlFor="ApartmentInput">Apartment, suite, etc.</label>
                        <input
                            name="ApartmentInput"
                            className="ApartmentInput"
                            value={formik.values.ApartmentInput}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.ApartmentInput && (
                            <div className="address_err_message">{formik.errors.ApartmentInput}</div>
                        )}
                    </div>
                </div>
                <div className="form_add_new_address_row">
                    <div className="row-item">
                        <label htmlFor="CityInput">City</label>
                        <input
                            name="CityInput"
                            className="CityInput"
                            value={formik.values.CityInput}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.CityInput && (
                            <div className="address_err_message">{formik.errors.CityInput}</div>
                        )}
                    </div>
                </div>
                <div className="form_add_new_address_row">
                    <div className="row-item">
                        <label htmlFor="CountryInput">Country</label>
                        <input
                            name="CountryInput"
                            className="CountryInput"
                            value={formik.values.CountryInput}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.CountryInput && (
                            <div className="address_err_message">{formik.errors.CountryInput}</div>
                        )}
                    </div>
                    <div className="row-item">
                        <label htmlFor="PostalCodeInput">Postal code</label>
                        <input
                            name="PostalCodeInput"
                            className="PostalCodeInput"
                            value={formik.values.PostalCodeInput}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.PostalCodeInput && (
                            <div className="address_err_message">{formik.errors.PostalCodeInput}</div>
                        )}
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
            </form>
        </div>
    );
}

export default AddNewAddressModal;
