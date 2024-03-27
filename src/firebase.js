// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKGuAd8cWK1vSKwpc10ZN5wgysnqztRCo",
  authDomain: "react-disney-plus-app-9339b.firebaseapp.com",
  projectId: "react-disney-plus-app-9339b",
  storageBucket: "react-disney-plus-app-9339b.appspot.com",
  messagingSenderId: "671602502502",
  appId: "1:671602502502:web:4febbb354839f22053b6a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;