// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDqUOEOv9nODhDHTRsouPfeEpVkQpm2pY",
  authDomain: "service-stack-dac1d.firebaseapp.com",
  projectId: "service-stack-dac1d",
  storageBucket: "service-stack-dac1d.firebasestorage.app",
  messagingSenderId: "928612906336",
  appId: "1:928612906336:web:010820192a3f470f8d5a05",
  measurementId: "G-QJPV2GVS9Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);