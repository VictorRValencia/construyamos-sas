// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA309PUQ0jo8kkTzXbyxES7oewZ3Yd6DSQ",
  authDomain: "construyamos-13351.firebaseapp.com",
  projectId: "construyamos-13351",
  storageBucket: "construyamos-13351.firebasestorage.app",
  messagingSenderId: "134671870236",
  appId: "1:134671870236:web:585af77b15c8e6bee172d9",
  measurementId: "G-TC75GDRLEK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);