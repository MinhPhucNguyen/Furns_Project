import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../pages/UserPages/CartPage/CartSlice';
import compareSlice from '../pages/UserPages/ComparePage/CompareSlice';
import addressSlice from '../pages/UserPages/DashBoardPage/Address/AddressSlice';
import wishlistSlice from '../pages/UserPages/WishlistPage/WishListSlice';

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        wishlist: wishlistSlice.reducer,
        address: addressSlice.reducer,
        compare: compareSlice.reducer,
    },
});

export default store;
