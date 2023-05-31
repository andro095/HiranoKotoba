// React Libraries

// Third Party Libraries
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

// Interfaces
import { IRegister, IRegisterResponse, UserInterface } from "@interfaces";

// Hooks

// Config
import { FirebaseAuth } from "./config";
import { AuthResponseEnum } from "@enums";


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

export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut();
};

export const registerUserWithEmailPassword = async({ name, lastName, email, password, image } : IRegister) : Promise<IRegisterResponse> => {
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid } = resp.user;
        
        // TODO: Upload image to Firebase Storage
        // TODO: Get image url from Firebase Storage
        // TODO: Create user in Firebase Firestore

        return {
            ok: true,
        }

    } catch (error: any) {
        return {
            ok: false,
            errorCode: error.code,
        }
    }
}