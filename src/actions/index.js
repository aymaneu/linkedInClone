import { provider, auth } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { SET_USER } from "./actionType";

export const setUser = (payload) => {
  return (dispatch, getState) => {
    dispatch({ type: SET_USER, user: payload });
  };
};
