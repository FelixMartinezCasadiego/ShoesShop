// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBQJECDQoGUUiaLbtlzfmYbGFxbHlf7yY",
  authDomain: "shoes-shop-4884a.firebaseapp.com",
  projectId: "shoes-shop-4884a",
  storageBucket: "shoes-shop-4884a.appspot.com",
  messagingSenderId: "150397218427",
  appId: "1:150397218427:web:34ad18eb4f819e13fa3cde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);