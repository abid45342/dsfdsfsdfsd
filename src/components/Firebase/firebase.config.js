// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVBkB0BKTAXJTYBDf8sr2gOKQ0eB--Rto",
  authDomain: "dragon-news-ee180.firebaseapp.com",
  projectId: "dragon-news-ee180",
  storageBucket: "dragon-news-ee180.firebasestorage.app",
  messagingSenderId: "19051038404",
  appId: "1:19051038404:web:c3be9a97516e56918f2b91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;