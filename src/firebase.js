import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDHv9Mjyp6gMCghcj5RVCDOgrAnHXT4MI0",
    authDomain: "instagram-clone-1444e.firebaseapp.com",
    projectId: "instagram-clone-1444e",
    storageBucket: "instagram-clone-1444e.appspot.com",
    messagingSenderId: "523311436826",
    appId: "1:523311436826:web:2528098901504a513cada3",
    measurementId: "G-W2TRY3D4ES"
  });

  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const functions = firebase.functions();

  export {db, auth, storage, functions};