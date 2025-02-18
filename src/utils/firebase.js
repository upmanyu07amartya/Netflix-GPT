// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAk4pKbxkkAktYRNzPMGZ_piFTVT5xVsgw",
  authDomain: "netflixgpt-579c4.firebaseapp.com",
  projectId: "netflixgpt-579c4",
  storageBucket: "netflixgpt-579c4.firebasestorage.app",
  messagingSenderId: "507380275343",
  appId: "1:507380275343:web:a194a1d4b88730db84b8fa",
  measurementId: "G-MCJX6L46EK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()