// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv7U35g-BjkZPAOYUb5F1jtG2ZSc8NRL0",
  authDomain: "auth-with-firebase-thunk.firebaseapp.com",
  projectId: "auth-with-firebase-thunk",
  storageBucket: "auth-with-firebase-thunk.appspot.com",
  messagingSenderId: "717831918888",
  appId: "1:717831918888:web:b6473deeebd5270935ec1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;