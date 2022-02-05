import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCMCCPEaT7hbVUeCg2OTqGhZ-X2wep5QgY",
    authDomain: "l1nkstart.firebaseapp.com",
    projectId: "l1nkstart",
    storageBucket: "l1nkstart.appspot.com",
    messagingSenderId: "562960908837",
    appId: "1:562960908837:web:12b69acbe54b7e91e0f5cc"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp}