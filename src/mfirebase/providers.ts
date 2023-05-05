// React Libraries

// Third Party Libraries
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Interfaces

// Hooks

// Config
import { FirebaseAuth } from "./config";
import { UserInterface } from "@interfaces";


const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);

        const { displayName, email, photoURL, uid } = result.user; 

        const user : UserInterface = {
            name: displayName,
            email,
            photoURL,
            uid
        }

        return {
            ok: true,
            user                                                                                    
        }

    } catch (error : any) {
        const errorMessage = error?.message;
        return {
            ok: false,
            errorMessage
        }
    }
};