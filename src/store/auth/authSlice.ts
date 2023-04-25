// React Libraries

// Third Party Libraries
import { createSlice } from "@reduxjs/toolkit";

// Interfaces
import { AuthState } from "@interfaces";

// Hooks

// Enums
import { AuthStatus } from "@enums";


const initialState: AuthState = {
    // Change this to checking
    status: AuthStatus.NotAuthenticated,
    user: null,
    errorMessage: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        login: (state, { payload }) => {
            state.status = AuthStatus.Authenticated;
            state.user = payload;
            state.errorMessage = null;
        },
        logout: (state, { payload }) => {
            state.status = AuthStatus.NotAuthenticated;
            state.user = null;
            state.errorMessage = payload?.errorMessage;
        },
        checkingCredentials: ( state ) => {
            state.status = AuthStatus.Checking;
        }
    }
});

export const { login, logout, checkingCredentials } = authSlice.actions;
