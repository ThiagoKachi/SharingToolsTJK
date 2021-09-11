import firebase from 'firebase/app';
import 'firebase/auth';

import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);

async function authWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  const result = await firebase.auth().signInWithPopup(provider);
  return result;
}

const auth = firebase.auth();

const signOut = async (e) => {
  e.preventDefault();

  await firebase
    .auth()
    .signOut()
    .then(function () {
      console.log('Successfully signed out.');
      localStorage.removeItem('userNameAuth');
      localStorage.removeItem('userAvatarAuth');
      localStorage.removeItem('userEmailAuth');
    })
    .catch(function (error) {
      console.log(error);
      console.log('An error occurred');
    });

  return (window.location.href = '/');
};

export { authWithGoogle, auth, signOut };
