// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_HlNhfHEZzjVkHJ6J2lF1GRU_H6kWZes",
  authDomain: "canadian-star-news.firebaseapp.com",
  projectId: "canadian-star-news",
  storageBucket: "canadian-star-news.appspot.com",
  messagingSenderId: "305951667142",
  appId: "1:305951667142:web:f1d79c718bc7d1819c38c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;