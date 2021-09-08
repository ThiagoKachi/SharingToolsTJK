import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);

async function authWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  const result = await firebase.auth().signInWithPopup(provider);
  return result;
}

const auth = firebase.auth();
const signout = firebase.auth().signOut();

export { authWithGoogle, auth, signout };
