// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkbrnuFg4ECAPyw4x18FZV7-kWbCYaHFI",
  authDomain: "student-toolkit-ff620.firebaseapp.com",
  projectId: "student-toolkit-ff620",
  storageBucket: "student-toolkit-ff620.firebasestorage.app",
  messagingSenderId: "174752978137",
  appId: "1:174752978137:web:1f1084fdf078f8fbe15ac8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
