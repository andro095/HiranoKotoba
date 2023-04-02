// Librerias de Terceros
import { createSlice } from "@reduxjs/toolkit";

// Archivos propios
import { AuthState } from "../../interfaces";
import { AuthStatus } from "../../enums";

// Hooks

// Funcionalidad

// Assets


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
