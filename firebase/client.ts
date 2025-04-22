import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmDW0YTm-k1OPx2FheHqW7-nKCl8_7U8I",
  authDomain: "prepinterview-ef3cb.firebaseapp.com",
  projectId: "prepinterview-ef3cb",
  storageBucket: "prepinterview-ef3cb.firebasestorage.app",
  messagingSenderId: "801656935372",
  appId: "1:801656935372:web:9648dfc36d0de04ebd8369",
  measurementId: "G-VFCFSNE6K0",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
