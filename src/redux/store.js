import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../pages/UserPages/CartPage/CartSlice';
import wishlistSlice from '../pages/UserPages/WishlistPage/WishListSlice';

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        wishlist: wishlistSlice.reducer,
    },
});

export default store;
