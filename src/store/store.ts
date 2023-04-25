// React Libraries
import { configureStore } from "@reduxjs/toolkit";

// Third Party Libraries

// Interfaces

// Hooks

// Store
import { authSlice } from './auth';
import { configSlice } from "./config";


export const store = configureStore({
    reducer: {
        // Aqui van los reducers
        auth: authSlice.reducer,
        config: configSlice.reducer,
    }
})