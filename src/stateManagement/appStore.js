import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from './slices/userAuthSlice';
export default configureStore({
    reducer : {
        userAuthDetails : userAuthReducer
    },
});