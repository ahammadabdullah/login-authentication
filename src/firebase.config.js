// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCddkLPML2dsOLRuqqGdxe3zbcObyG2LY4",
  authDomain: "login-signup-6668d.firebaseapp.com",
  projectId: "login-signup-6668d",
  storageBucket: "login-signup-6668d.appspot.com",
  messagingSenderId: "934129835676",
  appId: "1:934129835676:web:a4a2ed062f9ca4b88c5759",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
