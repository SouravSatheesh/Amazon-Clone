import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpa2wG0vdYN_Y4Pvfzc1-pLJGOVCb_NOg",
  authDomain: "clone-60616.firebaseapp.com",
  projectId: "clone-60616",
  storageBucket: "clone-60616.appspot.com",
  messagingSenderId: "37409612585",
  appId: "1:37409612585:web:d6e5be1f81d2de6ccc8d38",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
