import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { AppContext, AuthContext } from './AppContext';

import { auth, authWithGoogle } from '../services/googleAuth';

export function Authprovider({ children }) {
  const { userName, userEmail } = useContext(AppContext);
  const [redirect, setRedirect] = useState(false);

  const [googleAuth, setGoogleAuth] = useState(null);

  function setRedirectAfterAuth() {
    setRedirect(true);
  }

  async function actionLoginDataGoogle(user) {
    const newUser = {
      name: user.displayName,
      avatar: user.photoURL,
      email: user.email,
    };

    setGoogleAuth(newUser);
  }

  async function actionLoginGoogle() {
    const result = await authWithGoogle();

    if (result) {
      actionLoginDataGoogle(result.user).then(() => setRedirectAfterAuth());
    } else {
      throw new Error('Missing information from google Account.');
    }
  }

  // Persist auth user
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, email } = user;

        if (!displayName || !photoURL || !email) {
          throw new Error('Missing information from google Account.');
        }

        const newUser = {
          name: user.displayName,
          avatar: user.photoURL,
          email: user.email,
        };

        setGoogleAuth(newUser);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  //
  function verifyName() {
    if (googleAuth) {
      return googleAuth.name;
    } else {
      return userName;
    }
  }

  function verifyEmail() {
    if (googleAuth) {
      return googleAuth.email;
    } else {
      return userEmail;
    }
  }

  const infosToShare = {
    actionLoginGoogle,
    googleAuth,
    verifyName,
    verifyEmail,
    redirect,
  };
  return (
    <AuthContext.Provider value={infosToShare}>{children}</AuthContext.Provider>
  );
}

Authprovider.propTypes = {
  children: PropTypes.node,
};
