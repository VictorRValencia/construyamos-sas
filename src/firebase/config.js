
import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA309PUQ0jo8kkTzXbyxES7oewZ3Yd6DSQ",
  authDomain: "construyamos-13351.firebaseapp.com",
  projectId: "construyamos-13351",
  storageBucket: "construyamos-13351.firebasestorage.app",
  messagingSenderId: "134671870236",
  appId: "1:134671870236:web:585af77b15c8e6bee172d9",
  measurementId: "G-TC75GDRLEK",
};

const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export { app };
