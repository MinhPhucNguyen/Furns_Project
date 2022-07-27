import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        wishlistProducts: [],
    },
    reducers: {
        addtoWishlist(state, action) {
            const product = action.payload;

            const existingProduct = state.wishlistProducts.some((item) => item.id === product.id);

            if (existingProduct === false) {
                state.wishlistProducts.push({
                    id: product.id,
                    img: product.img,
                    alt: product.alt,
                    name: product.nameProduct,
                    price: product.newPrice,
                    quantity: 1,
                    totalPrice: parseFloat(product.newPrice.substring(1)),
                    chooseBtn: product.chooseBtn,
                });
            }
        },

        removeFromWishlist(state, action) {
            state.wishlistProducts.splice(
                state.wishlistProducts.findIndex((item) => item.id === action.payload),
                1,
            );
        },
    },
});

export const wishlistActions = wishlistSlice.actions;

export default wishlistSlice;
