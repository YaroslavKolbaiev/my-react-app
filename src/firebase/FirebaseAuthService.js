import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./FireBaseConfig";

const logOutUser = () => auth.signOut();

const logInWithGoogle = () => {
  const provider = new GoogleAuthProvider();

  return signInWithPopup(auth, provider);
};

const subscribeToAuthChanges = (handleAuthChanges) => {
  onAuthStateChanged(auth, (user) => {
    handleAuthChanges(user?.email);
  });
};

export const FirebaseAuthService = {
  logOutUser,
  logInWithGoogle,
  subscribeToAuthChanges,
};
