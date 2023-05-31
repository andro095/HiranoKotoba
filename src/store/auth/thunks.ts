// React Libraries

// Third Party Libraries

// Interfaces
import { IRegister, IRegisterResponse, UserInterface } from "@interfaces"

// Hooks

// Store
import { checkingCredentials, login, logout } from "./authSlice"

// Firebase
import { logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "@mfirebase"

// Enums
import { AuthResponseEnum } from "@enums"


export const startLoginWithEmailPassword = (email: string, password: string) => {
    return async( dispatch: any ) => {
        
    }
}

export const startSendConfirmationEmail = (email?: string) => {
    return async( dispatch: any ) => {
        
    }
}

export const startGoogleSignIn = () => {
    return async( dispatch: any ) => {
        dispatch( checkingCredentials() );
        
        const result = await signInWithGoogle();

        if ( !result.ok ) return dispatch( logout( AuthResponseEnum.ErrorGoogleLogIn ) );

        dispatch( login( result.user as UserInterface ) );
        
    }
}

export const startLogout = () => {
    return async( dispatch: any ) => {
        await logoutFirebase();

        dispatch( logout() );
    }
}

export const startRegisterWithEmailPassword = ( user: IRegister ) => {
    return async( dispatch: any ) => {
        dispatch( checkingCredentials() );
        
        const resp : IRegisterResponse = await registerUserWithEmailPassword( user );

        console.log( resp );
    }
}