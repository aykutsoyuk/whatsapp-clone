import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBcsZZ9qXcqjgRpII39xDnzF7xOUIEisHM",
  authDomain: "whatsapp-clone-e6e0e.firebaseapp.com",
  projectId: "whatsapp-clone-e6e0e",
  storageBucket: "whatsapp-clone-e6e0e.appspot.com",
  messagingSenderId: "97825297143",
  appId: "1:97825297143:web:a048074dcc86dc9782f9f2",
};

export const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
