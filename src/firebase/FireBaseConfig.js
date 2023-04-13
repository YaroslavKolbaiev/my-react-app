import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const config = {
  apiKey: "AIzaSyDxl77KqUWoe-t3dOAKli2n0MjtCnUWlts",
  authDomain: "next-blog-v3.firebaseapp.com",
  projectId: "next-blog-v3",
  storageBucket: "next-blog-v3.appspot.com",
  messagingSenderId: "1046810904491",
  appId: "1:1046810904491:web:abc3642737cda12f3af4ee",
};

export const firebaseApp = initializeApp(config);
export const auth = getAuth(firebaseApp);
