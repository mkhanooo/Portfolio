import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCEUKjH-vVnU78oM4CNTUsa7KbnyNnaU4c",
  authDomain: "my-portfolio-0-1.firebaseapp.com",
  databaseURL: "https://my-portfolio-0-1.firebaseio.com",
  projectId: "my-portfolio-0-1",
  storageBucket: "my-portfolio-0-1.appspot.com",
  messagingSenderId: "222201860822",
  appId: "1:222201860822:web:ab5509f1bcbca39caeaf77"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// DATABASE
var db = firebase.firestore();

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

// Create a storage reference from our storage service
var storageRef = storage.ref();

export {db, storage, storageRef}
export default firebase;