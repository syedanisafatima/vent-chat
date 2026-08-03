// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc,
  addDoc,
  collection,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbOHp6UgUY8dtjMFlqXRnl_YWkpYF6zms",
  authDomain: "ventchat-80d5a.firebaseapp.com",
  projectId: "ventchat-80d5a",
  storageBucket: "ventchat-80d5a.firebasestorage.app",
  messagingSenderId: "1028130518277",
  appId: "1:1028130518277:web:91740a170691ce9316b36c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  db,
  doc,
  setDoc,
  addDoc,
  collection,
  serverTimestamp,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
};

console.log("Firebase Connected Successfully!");