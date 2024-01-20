// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth" 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdmnlDP_9bQ82YiHCTMRMTpmKMdDeI6R0",
  authDomain: "ott-sevice.firebaseapp.com",
  projectId: "ott-sevice",
  storageBucket: "ott-sevice.appspot.com",
  messagingSenderId: "988170261694",
  appId: "1:988170261694:web:25c508ff9f5e68a0f5faef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;