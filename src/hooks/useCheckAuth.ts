// React Libraries
import { useEffect } from "react";

// Third Party Libraries
import { onAuthStateChanged } from "firebase/auth";

// Interfaces

// Hooks
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector"

// Store
import { login, logout } from "@store";

// Firebase
import { FirebaseAuth } from "@mfirebase";

export const useCheckAuth = () => {

    const { status } = useAppSelector(state => state.auth);

    const dispatch = useAppDispatch();

    useEffect(() => {
        onAuthStateChanged( FirebaseAuth,   async ( user ) => {
            if ( !user ) return dispatch( logout() );

            const { uid, displayName, email, photoURL } = user;

            dispatch( login({ uid, name: displayName, email, photoURL }) );
            
        })
    }, [])
    

    return status;
    
}