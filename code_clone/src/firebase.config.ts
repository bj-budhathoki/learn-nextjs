// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRWUCGc_bzbOhL1gkMemIxH7qgbD_wZbs",
  authDomain: "nextauth-learn.firebaseapp.com",
  projectId: "nextauth-learn",
  storageBucket: "nextauth-learn.appspot.com",
  messagingSenderId: "282054909217",
  appId: "1:282054909217:web:a3c17494f27d39cee1b260",
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export { app, db, storage };
