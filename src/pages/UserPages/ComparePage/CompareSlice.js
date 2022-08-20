import { createSlice } from '@reduxjs/toolkit';

const compareSlice = createSlice({
    name: 'compare',
    initialState: {
        listProductCompare: [],
    },
    reducers: {
        addtoCompare(state, action) {
            const productCompare = action.payload;

            state.listProductCompare.push(productCompare);
        },
    },
});

export const compareActions = compareSlice.actions;
export default compareSlice;
