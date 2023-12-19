import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDoL2W8UMtEuLUaa73SQnUU4WcH2BSjO3Q",
  authDomain: "resturant-bfeaf.firebaseapp.com",
  projectId: "resturant-bfeaf",
  storageBucket: "resturant-bfeaf.appspot.com",
  messagingSenderId: "1009628372995",
  appId: "1:1009628372995:web:9b0717fa6aacdbe8716e36",
  measurementId: "G-E88Z3S0K73"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth()
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export {db,analytics,auth,provider}