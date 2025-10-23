import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "registerjeans.firebaseapp.com",
  projectId: "registerjeans",
  storageBucket: "registerjeans.firebasestorage.app",
  messagingSenderId: "399919963177",
  appId: "1:399919963177:web:dec683857f8a4074d9d038"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()

export {auth,provider}