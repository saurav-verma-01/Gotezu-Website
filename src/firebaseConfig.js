// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCWRxaYJjVsHr_wku8QPNW4vSfymBIXpbg",
  authDomain: "trainers-directory-v2.firebaseapp.com",
  projectId: "trainers-directory-v2",
  storageBucket: "trainers-directory-v2.firebasestorage.app",
  messagingSenderId: "663895717868",
  appId: "1:663895717868:web:f0dc37e9367ad1c1adb2c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

// Export both
export { db, auth };
