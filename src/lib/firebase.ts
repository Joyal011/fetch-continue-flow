import { initializeApp, type FirebaseApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDy0NzsSSNByj2Qg8wLooVBqq7F7aF54",
  authDomain: "chosen-generation-b826d.firebaseapp.com",
  projectId: "chosen-generation-b826d",
  storageBucket: "chosen-generation-b826d.appspot.com",
  messagingSenderId: "378528654100",
  appId: "1:378528654100:web:ec2d52c93d4299a97d31",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
