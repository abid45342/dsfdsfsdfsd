// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDmNYZY7tSh_zWEsoYza3vf9N3Bg34foY",
  authDomain: "email-password-auth-e8625.firebaseapp.com",
  projectId: "email-password-auth-e8625",
  storageBucket: "email-password-auth-e8625.firebasestorage.app",
  messagingSenderId: "88911411555",
  appId: "1:88911411555:web:b4cbf2ff1bc9bbba4bbb56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
export default auth;