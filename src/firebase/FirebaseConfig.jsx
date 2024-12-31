import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDIxvP9B_ZHCM33tkLCCLJnCeSux9PJcGg",
  authDomain: "shop-84025.firebaseapp.com",
  projectId: "shop-84025",
  storageBucket: "shop-84025.firebasestorage.app",
  messagingSenderId: "987073019140",
  appId: "1:987073019140:web:67a8f0e34b69cf95d1a451",
};
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
