import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    initialState: false,
    name: "authState",
    reducers: {
        change: (state) => {
            state = !state
        }
    }
});

export const { change } = authSlice.actions;
export default authSlice.reducer;