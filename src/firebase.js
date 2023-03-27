// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGsLfgYKN66yTqnqs37bIDNXHf_KaQXcQ",
  authDomain: "vue-live-chat-zp01.firebaseapp.com",
  projectId: "vue-live-chat-zp01",
  storageBucket: "vue-live-chat-zp01.appspot.com",
  messagingSenderId: "338391652639",
  appId: "1:338391652639:web:11e7550082e7c52f33782a",
  measurementId: "G-JC8NEBJV0K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getFirestore } from 'firebase/firestore';

export const db = getFirestore(app);

import{getAuth} from 'firebase/auth';
export const auth = getAuth(app);

