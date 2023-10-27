import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6FzeEpxcXJC1QwlJ4M3HqlC7xKHv5AQo",
  authDomain: "reactnote-98c3d.firebaseapp.com",
  databaseURL: "https://reactnote-98c3d-default-rtdb.firebaseio.com/",
  projectId: "reactnote-98c3d",
  storageBucket: "reactnote-98c3d.appspot.com",
  messagingSenderId: "494187639811",
  appId: "1:494187639811:web:6393a14a6fd78c531f0a36"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Initialize Firebase Realtime Database and export the database reference


export default app;