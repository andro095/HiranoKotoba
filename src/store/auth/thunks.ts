// React Libraries

// Third Party Libraries

// Interfaces
import { UserInterface } from "@interfaces"

// Hooks

// Store
import { checkingCredentials, login, logout } from "./authSlice"

// Firebase
import { signInWithGoogle } from "@mfirebase"

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