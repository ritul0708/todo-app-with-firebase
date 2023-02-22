// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "todo-app-c89ba.firebaseapp.com",
  projectId: "todo-app-c89ba",
  storageBucket: "todo-app-c89ba.appspot.com",
  messagingSenderId: "1061800187754",
  appId: "1:1061800187754:web:6c6ae659ba4cfb4706f713"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);