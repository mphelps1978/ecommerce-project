import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'






 const config = {
  apiKey: "AIzaSyDmypsaUp3gwNrEvCdH4yB_OsRxZKD_Auc",
  authDomain: "ecommerce-db-dc2ae.firebaseapp.com",
  databaseURL: "https://ecommerce-db-dc2ae.firebaseio.com",
  projectId: "ecommerce-db-dc2ae",
  storageBucket: "ecommerce-db-dc2ae.appspot.com",
  messagingSenderId: "373173209181",
  appId: "1:373173209181:web:bbe17552556631fbe4a5b4",
  measurementId: "G-CM1WR55RTW"
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore()

const gaProvider = new firebase.auth.GoogleAuthProvider()
gaProvider.setCustomParameters({propmpt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(gaProvider)



export default firebase

