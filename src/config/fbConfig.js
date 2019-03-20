 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'
 
 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyB40t_6E4bM_h8HAyWw_ACtA0H3Cf_jSPs",
  authDomain: "net-ninja-redux-firebase-tut.firebaseapp.com",
  databaseURL: "https://net-ninja-redux-firebase-tut.firebaseio.com",
  projectId: "net-ninja-redux-firebase-tut",
  storageBucket: "net-ninja-redux-firebase-tut.appspot.com",
  messagingSenderId: "935580923900"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })