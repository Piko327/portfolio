// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDCe36-JPL6KXVhl48KApTvcwJplFIUe7I",
  authDomain: "portfolio-83dda.firebaseapp.com",
  projectId: "portfolio-83dda",
  storageBucket: "portfolio-83dda.appspot.com",
  messagingSenderId: "334285415621",
  appId: "1:334285415621:web:1cb8e43779511abc6f3cac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  export  const auth = getAuth(app)