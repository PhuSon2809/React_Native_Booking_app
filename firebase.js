import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCoGhcgBJ9t5ayEQNinpeyZFGtUoXs4qjA",
  authDomain: "booking-project-8ecee.firebaseapp.com",
  projectId: "booking-project-8ecee",
  storageBucket: "booking-project-8ecee.appspot.com",
  messagingSenderId: "1038123023984",
  appId: "1:1038123023984:web:460c4556b3c537ade0feb5",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
