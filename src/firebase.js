import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB114BVUdkSNBK6qlkqsBFo7cjRNK-IE5U",
  authDomain: "linkedin-clone-32ce8.firebaseapp.com",
  projectId: "linkedin-clone-32ce8",
  storageBucket: "linkedin-clone-32ce8.appspot.com",
  messagingSenderId: "664157604736",
  appId: "1:664157604736:web:a8277fa421149130994f65",
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();
export { auth, provider, storage };
export default db;