// React Libraries

// Third Party Libraries
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Interfaces
import { AuthState, UserInterface } from "@interfaces";

// Hooks

// Enums
import { AuthResponseEnum, AuthStatus } from "@enums";


const initialState: AuthState = {
    status: AuthStatus.Checking,
    user: null,
    errorType: null,
    confirmationEmailSent: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        login: (state, { payload } : PayloadAction<UserInterface>) => {
            state.status = AuthStatus.Authenticated;
            state.user = payload;
            state.errorType = null;
            state.confirmationEmailSent = false;
        },

        logout: (state, { payload } : PayloadAction<AuthResponseEnum | undefined>) => {
            state.status = AuthStatus.NotAuthenticated;
            state.user = null;
            state.errorType = payload || null;
            state.confirmationEmailSent = false;
        },

        checkingCredentials: ( state ) => {
            state.status = AuthStatus.Checking;
        },

        cleanErrors: ( state ) => {
            state.errorType = null;
        },

        resetConfirmationEmailSent: ( state ) => {
            state.confirmationEmailSent = false;
        },

        confirmEmailSent: ( state ) => {
            state.confirmationEmailSent = true;
        }
    }
});

export const { login, logout, checkingCredentials, cleanErrors, resetConfirmationEmailSent, confirmEmailSent } = authSlice.actions;
