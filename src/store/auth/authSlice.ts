// Librerias de Terceros
import { createSlice } from "@reduxjs/toolkit";

// Archivos propios

// Hooks

// Funcionalidad
import { AuthState } from "../../interfaces/slices";

// Assets


const initialState: AuthState = {
    status: 'idle',
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        login: (state, { payload }) => {

        },
    }
});

export const { login } = authSlice.actions;
