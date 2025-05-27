import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCef4FVHtdYAdceWqOcj4NJJYQRTx2Gi8w",
  authDomain: "premix-3a811.firebaseapp.com",
  projectId: "premix-3a811",
  storageBucket: "premix-3a811.appspot.com",
  messagingSenderId: "752449813800",
  appId: "1:752449813800:web:fe8551e86b5c2a6743241d",
  databaseURL: "https://premix-3a811-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);