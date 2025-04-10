// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtJINw2A6Tje5bkygBIg45gDOfSsKeBQI",
  authDomain: "societysphere-46d5b.firebaseapp.com",
  projectId: "societysphere-46d5b",
  storageBucket: "societysphere-46d5b.firebasestorage.app",
  messagingSenderId: "260499917198",
  appId: "1:260499917198:web:cf80ec89d9b3723ac9bcdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);