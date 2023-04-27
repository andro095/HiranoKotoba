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
    errorType: null,
    responseMessage: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        login: (state, { payload }) => {
            state.status = AuthStatus.Authenticated;
            state.user = payload;
            state.errorType = null;
            state.responseMessage = null;
        },

        logout: (state, { payload }) => {
            state.status = AuthStatus.NotAuthenticated;
            state.user = null;
            state.errorType = payload?.errorMessage;
            state.responseMessage = null;
        },

        checkingCredentials: ( state ) => {
            state.status = AuthStatus.Checking;
        },

        cleanErrors: ( state ) => {
            state.errorType = null;
        }
    }
});

export const { login, logout, checkingCredentials, cleanErrors } = authSlice.actions;
