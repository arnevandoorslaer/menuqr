// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5VGn4dOAVs_xG6Y0L2Sh6Sxo7Pvj4LUU",
  authDomain: "menuqr-f85d1.firebaseapp.com",
  projectId: "menuqr-f85d1",
  storageBucket: "menuqr-f85d1.appspot.com",
  messagingSenderId: "159213798652",
  appId: "1:159213798652:web:fa30bcdfce31d5a8038379",
  measurementId: "G-6YN1D8TY1N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

console.log(collection(db, 'menu-item'));
