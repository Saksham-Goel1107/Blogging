import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getEvn } from "./getEnv";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgQ--kyDWOzjbPA797w82TcHijges2ZUo",
  authDomain: "blogify-1746690408602.firebaseapp.com",
  projectId: "blogify-1746690408602",
  storageBucket: "blogify-1746690408602.firebasestorage.app",
  messagingSenderId: "656806823030",
  appId: "1:656806823030:web:ba2dc5d6650b54b19d0b57",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
