import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apikey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_API_KEY,
    projectId: import.meta.env.VITE_FIREBASE_API_KEY,
    storageBucket: import.meta.env.VITE_FIREBASE_API_KEY,
    messagingSenderId: import.meta.env.VITE_FIREBASE_API_KEY,
    appId: import.meta.env.VITE_FIREBASE_API_KEY,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);