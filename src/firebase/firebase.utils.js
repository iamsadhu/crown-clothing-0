import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config =  {
    apiKey: "AIzaSyCTUF57ZRDCP0wDEdmY1jr32Bts99k7wII",
    authDomain: "crown-clothing-0-db.firebaseapp.com",
    databaseURL: "https://crown-clothing-0-db.firebaseio.com",
    projectId: "crown-clothing-0-db",
    storageBucket: "crown-clothing-0-db.appspot.com",
    messagingSenderId: "779540447141",
    appId: "1:779540447141:web:bd636aca991bb7d5b3b24c",
    measurementId: "G-5009S777WW"
  };



firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'})

export const SignInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
