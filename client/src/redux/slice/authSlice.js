import { createSlice } from "@reduxjs/toolkit";
import { verifyOtp, sendOtp, isauthrize, logoutUser } from "../../machine/auth";
import Cookies from "js-cookie";
import { getuser } from "../../machine/user";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        loading: false,
        error: null,
        isAuthenticated: false,
        otpSent: false,
    },
    reducers: {
        clearError(state) {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // Send OTP
            .addCase(sendOtp.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.otpSent = false;
            })
            .addCase(sendOtp.fulfilled, (state) => {
                state.loading = false;
                state.otpSent = true;
            })
            .addCase(sendOtp.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Verify OTP
            .addCase(verifyOtp.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(verifyOtp.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isAuthenticated = true;
                state.loading = false;
                state.error = null;
            })
            .addCase(verifyOtp.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.isAuthenticated = false;
            })
            // for get user
            .addCase(getuser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getuser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isAuthenticated = true;
                state.loading = false;
            })
            .addCase(getuser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.isAuthenticated = false;

            }).addCase(isauthrize.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(isauthrize.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isAuthenticated = true;
                state.loading = false;
            })
            .addCase(isauthrize.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.isAuthenticated = false;
            })
            .addCase(logoutUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            // logout user
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null;
                state.isAuthenticated = false;
                state.loading = false;
                state.error = null;
                state.otpSent = false;
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;
