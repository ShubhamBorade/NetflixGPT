// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzb1ke7ov5Iz9k8ACI2xMhJ7ihk9BxT5g",
  authDomain: "netflixgpt-f9348.firebaseapp.com",
  projectId: "netflixgpt-f9348",
  storageBucket: "netflixgpt-f9348.appspot.com",
  messagingSenderId: "749266086724",
  appId: "1:749266086724:web:93618f64ae35ada4c04511",
  measurementId: "G-935N9NHCH0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);