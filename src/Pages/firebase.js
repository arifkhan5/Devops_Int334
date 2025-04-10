
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtJINw2A6Tje5bkygBIg45gDOfSsKeBQI",
  authDomain: "societysphere-46d5b.firebaseapp.com",
  projectId: "societysphere-46d5b",
  storageBucket: "societysphere-46d5b.firebasestorage.app",
  messagingSenderId: "260499917198",
  appId: "1:260499917198:web:cf80ec89d9b3723ac9bcdf"
};

const app=initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore(app);
export default app;

