// Import dari Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCOK6Rz0BDfWOFJyv3EjVILfLAxFCyUicM",
  authDomain: "prodi-39deb.firebaseapp.com",
  projectId: "prodi-39deb",
  storageBucket: "prodi-39deb.appspot.com",
  messagingSenderId: "32802389185",
  appId: "1:32802389185:web:24383f54ff448ce2d92840"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Inisialisasi Auth, Provider, Firestore
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

// Export supaya bisa dipakai di file lain
export { auth, provider, db };
