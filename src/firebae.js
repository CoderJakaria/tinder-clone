import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC7CGk5CYR9BtbDaxaGBy7ocd2SjTk06bA",
    authDomain: "tinder-clone-a8eb4.firebaseapp.com",
    projectId: "tinder-clone-a8eb4",
    storageBucket: "tinder-clone-a8eb4.appspot.com",
    messagingSenderId: "829882285286",
    appId: "1:829882285286:web:3ab0620d1d8775bdab4f27",
    measurementId: "G-MEMZH5CWBR"
  });


const db = firebaseApp.firestore();

export default db