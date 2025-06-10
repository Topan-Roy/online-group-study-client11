
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
     apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
//   apiKey: "AIzaSyBiY44DZdjrjsqnrFTjrD4IEauKbl6Fvy4",
//   authDomain: "online-group-study-f26a8.firebaseapp.com",
//   projectId: "online-group-study-f26a8",
//   storageBucket: "online-group-study-f26a8.firebasestorage.app",
//   messagingSenderId: "100684706274",
//   appId: "1:100684706274:web:ab9c9834c32823215a89bb"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);