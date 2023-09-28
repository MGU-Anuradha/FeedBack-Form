// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmmJVfHD5uULi_hk2Ad8tFUQbH8n8s_OY",
  authDomain: "feedbackform-2d40c.firebaseapp.com",
  projectId: "feedbackform-2d40c",
  storageBucket: "feedbackform-2d40c.appspot.com",
  messagingSenderId: "35205001678",
  appId: "1:35205001678:web:8f8217ef17a31d45f67b9f",
  measurementId: "G-PFBPGE4XNH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);