import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBu2Y2EaY-21mEDIr6BSZPCeb7qnNjoNSs",
  authDomain: "twitter-clone-a1237.firebaseapp.com",
  projectId: "twitter-clone-a1237",
  storageBucket: "twitter-clone-a1237.appspot.com",
  messagingSenderId: "369581583957",
  appId: "1:369581583957:web:ac444218d5efff18b16edc",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
// const auth = firebase.auth();

export default db;
