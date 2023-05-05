// React Libraries


// Third Party Libraries
import { FirebaseOptions, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';

// Interfaces

// Hooks

// Helpers
import { getEnvironments } from "@helpers";

const {
    VITE_APIKEY,
    VITE_AUTHDOMAIN,
    VITE_PROJECTID,
    VITE_STORAGEBUCKET,
    VITE_MESSAGINGSENDERID,
    VITE_APPID,
    VITE_MEASUREMENTID
} = getEnvironments();

const firebaseConfig : FirebaseOptions = {
    apiKey: VITE_APIKEY,
    authDomain: VITE_AUTHDOMAIN,
    projectId: VITE_PROJECTID,
    storageBucket: VITE_STORAGEBUCKET,
    messagingSenderId: VITE_MESSAGINGSENDERID,
    appId: VITE_APPID,
    measurementId: VITE_MEASUREMENTID
}

// export const FirebaseAnalytics = getAnalytics(FirebaseApp);
export const FirebaseApp       = initializeApp(firebaseConfig);
export const FirebaseAuth      = getAuth(FirebaseApp);
export const FirebaseDB        = getFirestore(FirebaseApp);

