import { configureStore } from "@reduxjs/toolkit";
import AccountReducer from "./accountSlice";
const store=configureStore({
    reducer:{
        account:AccountReducer,
    }
})
export default store;