import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "hyperxai-5f11d.firebaseapp.com",
  projectId: "hyperxai-5f11d",
  storageBucket: "hyperxai-5f11d.appspot.com",
  messagingSenderId: "785856659962",
  appId: process.env.FIREBASE_API_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)