// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3YKHCdcVBY08Tyl5Itrg8PLWBnv5tIVg",
  authDomain: "futureworld-47a1f.firebaseapp.com",
  databaseURL: "https://futureworld-47a1f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "futureworld-47a1f",
  storageBucket: "futureworld-47a1f.appspot.com",
  messagingSenderId: "171621223171",
  appId: "1:171621223171:web:7716c0772bcb4d674b7736",
  measurementId: "G-QJKRG5XHYL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);