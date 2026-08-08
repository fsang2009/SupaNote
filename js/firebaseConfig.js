import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';
import { getFirestore }  from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC-Pfmc5bxAg9bM83rGLjUTjgRMSEG39t8",
  authDomain: "supanote-9187b.firebaseapp.com",
  projectId: "supanote-9187b",
  storageBucket: "supanote-9187b.firebasestorage.app",
  messagingSenderId: "243352632283",
  appId: "1:243352632283:web:162d00118a31223e3645fe",
  measurementId: "G-E0VYJSTF88"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getFirestore(app)
 
export { auth, database }