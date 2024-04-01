// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz8HXsexdFGP4wTUVHbOhA51xnj2Zzv5Y",
  authDomain: "career-hub-454b7.firebaseapp.com",
  projectId: "career-hub-454b7",
  storageBucket: "career-hub-454b7.appspot.com",
  messagingSenderId: "568256074959",
  appId: "1:568256074959:web:38663dac88db1afb8b13ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;