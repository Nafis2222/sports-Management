// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
console.log('inside here', import.meta.env.VITE_PASS)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_KZlepaub6psFc2BL82ERFkKcW7-8MS4",
  authDomain: "sports-events-8aceb.firebaseapp.com",
  projectId: "sports-events-8aceb",
  storageBucket: "sports-events-8aceb.appspot.com",
  messagingSenderId: "178230636742",
  appId: "1:178230636742:web:356cfad3aa6055083427c7"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app