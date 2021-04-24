import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCrlEc4Cq2YMq7FhIaxiXfpSy2Pgxs3eNc",
    authDomain: "firegram-28d73.firebaseapp.com",
    databaseURL: "https://firegram-28d73-default-rtdb.firebaseio.com",
    projectId: "firegram-28d73",
    storageBucket: "firegram-28d73.appspot.com",
    messagingSenderId: "82912180617",
    appId: "1:82912180617:web:5c39875a543bc7e1558958"
  };

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;


export { projectStorage, projectFirestore, timestamp };