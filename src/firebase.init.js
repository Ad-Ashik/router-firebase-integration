// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpewbSWXrPHXc8n469w8HC6Mkw0Kuz6jo",
    authDomain: "router-fire-base-integration.firebaseapp.com",
    projectId: "router-fire-base-integration",
    storageBucket: "router-fire-base-integration.appspot.com",
    messagingSenderId: "246329778788",
    appId: "1:246329778788:web:38f9c1a1f03cc94ac83571"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;