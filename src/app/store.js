import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../reducers/user/userSlice'
import cartReducer from '../reducers/cart/cartSlice'

export default configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer
    }
});