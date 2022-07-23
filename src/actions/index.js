import { provider, auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export function signInAPI() {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((payload) => {
        console.log(payload);
      })
      .catch((err) => alert(err.message));
  };
}
