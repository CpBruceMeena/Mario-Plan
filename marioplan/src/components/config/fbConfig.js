import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC8B0MuhQzkza8QlnJzcGF9qGemnE7U0V0",
    authDomain: "mario-plan-d1528.firebaseapp.com",
    databaseURL: "https://mario-plan-d1528.firebaseio.com",
    projectId: "mario-plan-d1528",
    storageBucket: "mario-plan-d1528.appspot.com",
    messagingSenderId: "531750062965",
    appId: "1:531750062965:web:f2a814424ddaba078be13c",
    measurementId: "G-YQNJV5DCQ2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
