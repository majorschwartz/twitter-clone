/*

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu2Y2EaY-21mEDIr6BSZPCeb7qnNjoNSs",
  authDomain: "twitter-clone-a1237.firebaseapp.com",
  projectId: "twitter-clone-a1237",
  storageBucket: "twitter-clone-a1237.appspot.com",
  messagingSenderId: "369581583957",
  appId: "1:369581583957:web:ac444218d5efff18b16edc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

*/

import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
