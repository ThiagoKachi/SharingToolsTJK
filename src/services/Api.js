import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);

async function authWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  const result = await firebase.auth().signInWithPopup(provider);
  return result;
}

export default authWithGoogle;
