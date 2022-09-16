import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAuzp_VLQpEW8DpRDP_AGq9fr7p4eEPz3M",
  authDomain: "rontil-web-react.firebaseapp.com",
  projectId: "rontil-web-react",
  storageBucket: "rontil-web-react.appspot.com",
  messagingSenderId: "941429383805",
  appId: "1:941429383805:web:d993cd017148bd20894714"
};

// Referencias a Firestore
const fireApp = initializeApp(firebaseConfig);
export const db = getFirestore(fireApp)