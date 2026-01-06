// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyFra16gKgSKwVt7wsNUoRWAbq-vxhp6U",
  authDomain: "assignment-09-toyzone.firebaseapp.com",
  projectId: "assignment-09-toyzone",
  storageBucket: "assignment-09-toyzone.firebasestorage.app",
  messagingSenderId: "615609661534",
  appId: "1:615609661534:web:6a5cfe96c2c41e26b5dccf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
