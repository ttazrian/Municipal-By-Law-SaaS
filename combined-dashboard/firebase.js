import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getStorage, connectStorageEmulator } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAdBK1n-8UHPapaH0DOh5jnByXAk4BWLbk",
  authDomain: "capstoneproject-c8508.firebaseapp.com",
  projectId: "capstoneproject-c8508",
  storageBucket: "capstoneproject-c8508.firebasestorage.app",
  messagingSenderId: "80173169650",
  appId: "1:80173169650:web:811654c1c1badd7eae496b"
};
// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


export { auth, db, storage };