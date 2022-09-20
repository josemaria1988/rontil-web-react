import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVU0VgGAmewtWirc0tbft1OOqRlWma-UM",
  authDomain: "rontil-react.firebaseapp.com",
  projectId: "rontil-react",
  storageBucket: "rontil-react.appspot.com",
  messagingSenderId: "228174285559",
  appId: "1:228174285559:web:c76d6926d3860320fb61f2"
};

// Referencias a Firestore
const fireApp = initializeApp(firebaseConfig);
export const db = getFirestore(fireApp)

// Referencia a Firebase Authenticator
export const auth = getAuth(fireApp)
