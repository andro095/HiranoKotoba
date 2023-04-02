// Librerias de Terceros
import { configureStore } from "@reduxjs/toolkit";


// Archivos propios

// Hooks

// Funcionalidad
import { authSlice } from './auth';
import { configSlice } from "./config";

// Assets

export const store = configureStore({
    reducer: {
        // Aqui van los reducers
        auth: authSlice.reducer,
        config: configSlice.reducer,
    }
})