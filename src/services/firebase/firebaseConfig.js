
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC2FhnjN6BaR0lwjDxkp4d5JCPTG1qKWKo",
    authDomain: "backendsaoko.firebaseapp.com",
    projectId: "backendsaoko",
    storageBucket: "backendsaoko.appspot.com",
    messagingSenderId: "312285595469",
    appId: "1:312285595469:web:22403978c6126e97b75904"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)