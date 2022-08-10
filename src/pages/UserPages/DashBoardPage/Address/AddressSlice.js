import { createSlice } from '@reduxjs/toolkit';

const addressSlice = createSlice({
    name: 'address',
    initialState: {
        addressList: [],
        id: 0,
    },
    reducers: {
        saveAddress(state, action) {
            const newAddress = action.payload;
            state.addressList.push({
                id: state.id++,
                firstnameUser: newAddress.firstnameUser,
                lastnameUser: newAddress.lastnameUser,
                address: newAddress.address,
                apartment: newAddress.apartment,
                city: newAddress.city,
                postalCode: newAddress.postalCode,
            });
        },

        removeAddress(state, action) {
            state.addressList.splice(
                state.addressList.findIndex((item) => item.id === action.payload),
                1,
            );
        },
    },
});

export const addressAction = addressSlice.actions;
export default addressSlice;
