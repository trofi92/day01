import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "@U/initializer/firebase";
import { actions } from "@/redux/user/state";
import firebase from "firebase/app";
// https://vroomfan.tistory.com/7

const useAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        dispatch(actions.setValue("email", currentUser.email));
        dispatch(actions.setValue("uid", currentUser.uid));
      } else {
        dispatch(actions.setValue("email", null));
        dispatch(actions.setValue("uid", null));
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
      await auth.signOut();
    } finally {
      //시발
    }
  }, [dispatch]);

  return { signIn, signOut };
};
export default useAuth;
