import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// src/firebase.js

const firebaseConfig = {
    apiKey: "AIzaSyD5KXGvSbtfQc_3sttzsd39ef2frj9usW0",
    authDomain: "edu-hub-e3d56.firebaseapp.com",
    projectId: "edu-hub-e3d56",
    storageBucket: "edu-hub-e3d56.appspot.com",
    messagingSenderId: "268732844742",
    appId: "1:268732844742:web:f120a5268ddd0eaf2ae5c7",
    measurementId: "G-K90LCYXJDY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
