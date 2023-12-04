import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyD-28u-cvnWi4hiYVZb_lzCeb92U1XuQr0",
    authDomain: "cook-flare.firebaseapp.com",
    projectId: "cook-flare",
    storageBucket: "cook-flare.appspot.com",
    messagingSenderId: "177099565318",
    appId: "1:177099565318:web:1bdf1dd9c6f2af6322d687"
  };

  // initialize firebase
firebase.initializeApp(firebaseConfig);

// initialize services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timeStamp = firebase.firestore.Timestamp

export {projectFirestore, projectAuth, projectStorage, timeStamp}