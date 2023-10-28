// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "learn-react-51a35.firebaseapp.com",
  projectId: "learn-react-51a35",
  storageBucket: "learn-react-51a35.appspot.com",
  messagingSenderId: "162276670418",
  appId: "1:162276670418:web:cc20666e09a88041d9660b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);