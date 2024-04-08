import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./user/authState";

export const store = configureStore({
    reducer: {
        authState: authSlice,
    },
});
