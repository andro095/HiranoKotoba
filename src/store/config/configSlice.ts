// React Libraries
import { createSlice } from '@reduxjs/toolkit';

// Third Party Libraries

// Interfaces
import { ConfigState } from '@interfaces';

// Hooks

// Locale
import { locales } from '@locale';


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

