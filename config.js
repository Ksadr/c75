import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCSNMT4KZ7SxoZRagYh65bz5JAv9NzCVb8",
    authDomain: "e-ride-stage-4-75746.firebaseapp.com",
    databaseURL: "https://e-ride-stage-4-75746-default-rtdb.firebaseio.com",
    projectId: "e-ride-stage-4-75746",
    storageBucket: "e-ride-stage-4-75746.appspot.com",
    messagingSenderId: "850762552898",
    appId: "1:850762552898:web:abadbd8f5b1f588b6b7fdb"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
