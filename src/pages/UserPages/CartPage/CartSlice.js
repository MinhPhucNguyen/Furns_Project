import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        productsList: [],
        totalQuantity: 0,
    },
    reducers: {
        addToCart(state, action) {
            const newProduct = action.payload;

            // Check if product is existing
            const existingProduct = state.productsList.find((product) => product.id === newProduct.id);

            if (existingProduct) {
                existingProduct.quantity++;
                existingProduct.totalPrice += parseFloat(newProduct.newPrice.substring(1));
            } else {
                state.productsList.push({
                    id: newProduct.id,
                    img: newProduct.img,
                    alt: newProduct.alt,
                    name: newProduct.nameProduct,
                    price: newProduct.newPrice,
                    quantity: 1,
                    totalPrice: parseFloat(newProduct.newPrice.substring(1)),
                    chooseBtn: newProduct.chooseBtn,
                });
                state.totalQuantity++;
            }
        },

        editQuantityFromCart(state, action) {
            const id = action.payload;

            //Check if product
            const existingProduct = state.productsList.find((product) => product.id === id);

            if (existingProduct.quantity === 1) {
                state.productsList = state.productsList.filter((product) => product.id !== id);
                state.totalQuantity--;
            } else {
                existingProduct.quantity--;
                existingProduct.totalPrice -= parseFloat(existingProduct.price.substring(1));
            }
        },

        removeItemProduct(state, action) {
            state.productsList.splice(
                state.productsList.findIndex((product) => product.id === action.payload),
                1,
            );
            state.totalQuantity--;
        },

        clearAllProductinCart(state, action) {
            state.productsList = [];
            state.totalQuantity = 0;
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
