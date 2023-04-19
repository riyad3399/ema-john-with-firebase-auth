// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw8ObRCDS81c6HWotYKE7r46zC2_Zgzi4",
  authDomain: "ema-john-with-firebase-a-b7abd.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-b7abd",
  storageBucket: "ema-john-with-firebase-a-b7abd.appspot.com",
  messagingSenderId: "906653391472",
  appId: "1:906653391472:web:e308af8bc1e86ed23972b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;