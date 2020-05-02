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


const gaProvider = new firebase.auth.GoogleAuthProvider()
gaProvider.setCustomParameters({propmpt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(gaProvider)
export const auth = firebase.auth();
export const firestore = firebase.firestore()
export default firebase


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })

    } catch(error) {
      console.log('error creating user: ', error)

    }

  }
  return userRef
}
