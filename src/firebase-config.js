import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzeMkwSDX80hgsdnZ0oymOSj8vA4sTacs",
  authDomain: "login-1d69d.firebaseapp.com",
  projectId: "login-1d69d",
  storageBucket: "login-1d69d.appspot.com",
  messagingSenderId: "141043089381",
  appId: "1:141043089381:web:993a3055791ba5abd7f90c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);