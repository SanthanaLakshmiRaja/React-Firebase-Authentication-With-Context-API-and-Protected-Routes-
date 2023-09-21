// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxMhoYBVKAo4hnwW3Phc5ALcdkUC5Hjeg",
  authDomain: "react-authentication-ba65b.firebaseapp.com",
  projectId: "react-authentication-ba65b",
  storageBucket: "react-authentication-ba65b.appspot.com",
  messagingSenderId: "598652162488",
  appId: "1:598652162488:web:f0319479cb1fb534753f4d",
  measurementId: "G-1XLWDHZJQN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;