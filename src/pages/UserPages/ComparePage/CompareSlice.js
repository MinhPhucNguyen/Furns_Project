import { createSlice } from '@reduxjs/toolkit';

const compareSlice = createSlice({
    name: 'compare',
    initialState: {
        listProductCompare: [],
    },
    reducers: {
        addtoCompare(state, action) {
            const productCompare = action.payload;

            state.listProductCompare.unshift(productCompare);
        },

        removeFromCompare(state, action) {
            state.listProductCompare.splice(
                state.listProductCompare.findIndex((item) => item.id === action.payload),
                1,
            );
        },
    },
});

export const compareActions = compareSlice.actions;
export default compareSlice;
