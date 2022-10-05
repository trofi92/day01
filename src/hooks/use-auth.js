import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
<<<<<<< HEAD
import { auth } from "@U/initializer/firebase";
import { actions } from "@/redux/user/state";
import firebase from "firebase/app";
=======
// import { auth } from "@U/initializer/firebase";
import { actions } from "@/redux/user/state";
import firebase from "firebase/app";
import { authService } from "../firebase-config";
import { getAuth } from "firebase/auth";
>>>>>>> 1a8f7129471d42645a550b2a766beb44052d6999
// https://vroomfan.tistory.com/7

const useAuth = () => {
  const dispatch = useDispatch();
  const auth = getAuth();
  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        dispatch(actions.setValue("email", currentUser.email));
<<<<<<< HEAD
        dispatch(actions.setValue("uid", currentUser.uid));
      } else {
        dispatch(actions.setValue("email", null));
        dispatch(actions.setValue("uid", null));
=======
        dispatch(actions.setValue("pw", currentUser.pw));
      } else {
        dispatch(actions.setValue("email", null));
        dispatch(actions.setValue("pw", null));
>>>>>>> 1a8f7129471d42645a550b2a766beb44052d6999
      }
      dispatch(actions.setLoading(false));
    });
  }, [dispatch]);

  const signIn = useCallback(async () => {
    await auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);
    const provider = new firebase.auth.GoogleAuthProvider();

    dispatch(actions.setLoading(true));
    try {
      await auth.signInWithRedirect(provider);
    } catch {
      alert("인터넷이 불안정합니다. 다시 시도해주세요.");
    }
  }, [dispatch]);

  const signOut = useCallback(async () => {
    dispatch(actions.setLoading(true));
    dispatch(actions.reset());

    try {
      await auth.signOut(authService);
    } finally {
<<<<<<< HEAD
      //시발
=======
      return;
>>>>>>> 1a8f7129471d42645a550b2a766beb44052d6999
    }
  }, [dispatch]);

  return { signIn, signOut, dispatch };
};
export default useAuth;
