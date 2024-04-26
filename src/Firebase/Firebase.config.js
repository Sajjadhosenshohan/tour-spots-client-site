// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALhSn34JbV-07dh-gSsWrtlltphvIpMUs",
  authDomain: "tour-2b613.firebaseapp.com",
  projectId: "tour-2b613",
  storageBucket: "tour-2b613.appspot.com",
  messagingSenderId: "114523960881",
  appId: "1:114523960881:web:81ef810c4a37ab612b4710"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;