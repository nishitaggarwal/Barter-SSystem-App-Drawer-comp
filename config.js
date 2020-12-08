import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBulIfqy86Rg5PQpLeuGSWl6C6IlB6E1PQ",
    authDomain: "barter-system-app-f8ec4.firebaseapp.com",
    databaseURL: "https://barter-system-app-f8ec4.firebaseio.com",
    projectId: "barter-system-app-f8ec4",
    storageBucket: "barter-system-app-f8ec4.appspot.com",
    messagingSenderId: "341711252722",
    appId: "1:341711252722:web:15ab0889a585dbcb47346b"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();