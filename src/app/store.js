import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "./actions/userSlice.js";

export default configureStore({
    reducer: {
        user: userReducer
    }
});