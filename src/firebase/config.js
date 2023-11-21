import firebase from 'firebase/compat/app';
// import { initializeApp } from "firebase/compat/app";
import 'firebase/compat/storage';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDETeaNzvyVhxyB2rw_qgn6fhMej-hQ4cE",
  authDomain: "photo-gallery-5e208.firebaseapp.com",
  projectId: "photo-gallery-5e208",
  storageBucket: "photo-gallery-5e208.appspot.com",
  messagingSenderId: "374543038963",
  appId: "1:374543038963:web:bb8e007b1508da08e5fa86"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };