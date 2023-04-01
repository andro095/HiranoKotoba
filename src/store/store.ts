// Librerias de Terceros
import { configureStore } from "@reduxjs/toolkit";


// Archivos propios

// Hooks

// Funcionalidad
import { authSlice } from './auth/authSlice';

// Assets

export const store = configureStore({
    reducer: {
        // Aqui van los reducers
        auth: authSlice.reducer,
    }
})