// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "task-manager-c9dda.firebaseapp.com",
  projectId: "task-manager-c9dda",
  storageBucket: "task-manager-c9dda.appspot.com",
  messagingSenderId: "252343493674",
  appId: "1:252343493674:web:15f42600d70c7ce99e8f53",
};

let app = null;

if (firebaseConfig.apiKey && firebaseConfig.apiKey !== "dummykey") {
  app = initializeApp(firebaseConfig);
} else {
  console.warn("Firebase API key missing or dummy — skipping Firebase initialization");
}

export { app };
