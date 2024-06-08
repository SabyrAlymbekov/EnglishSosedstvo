import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB5Ow4wxStW4OXUbHOb_nLLORkiukT6Nd0",
    authDomain: "primeadvertising-48cc9.firebaseapp.com",
    projectId: "primeadvertising-48cc9",
    storageBucket: "primeadvertising-48cc9.appspot.com",
    messagingSenderId: "328638349648",
    appId: "1:328638349648:web:c7b4c37c8089b0390a6c55"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);