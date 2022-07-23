import { provider, auth } from "../firebase";
import { signInWithRedirect } from "firebase/auth";
import { SET_USER } from "./actionType";

export const setUser = (payload) => {
  type: SET_USER;
  user: payload;
};

export function signInAPI() {
  return (dispatch) => {
    signInWithRedirect(auth, provider)
      .then((payload) => {
        dispatch(setUser(payload.user));
        // console.log(payload);
      })
      .catch((err) => alert(err.message));
  };
}
