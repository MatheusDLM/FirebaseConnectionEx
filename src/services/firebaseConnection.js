import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyBmhGyoTpsTZEbvJU3ChefgYmpyNMZ-mN0",
    authDomain: "vueapp-3b3ab.firebaseapp.com",
    projectId: "vueapp-3b3ab",
    storageBucket: "vueapp-3b3ab.appspot.com",
    messagingSenderId: "990210192508",
    appId: "1:990210192508:web:60aa3ce1df8980079c85f9",
    measurementId: "G-R8SKEPEVGM"
  };

  if(!firebase.apps.length){
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }

  export default firebase;