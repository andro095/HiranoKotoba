// Librerias de Terceros
import { createSlice } from '@reduxjs/toolkit';

// Archivos propios
import { ConfigState } from '../../interfaces/slices';
import { locales } from '../../locale';

// Hooks

// Funcionalidad

// Assets


const initialLanguage : string = navigator.language.split('-')[0] in locales ? navigator.language.split('-')[0] : 'es';

const initialState : ConfigState = {
    language: initialLanguage, 
};

export const configSlice = createSlice({
    name: 'config',
    initialState: initialState,
    reducers: {
        changeLanguage: (state, { payload }) => {
            state.language = payload;
        },
    }
});
export const { changeLanguage } = configSlice.actions;

