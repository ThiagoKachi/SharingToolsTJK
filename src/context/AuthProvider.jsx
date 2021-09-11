import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { AppContext, AuthContext } from './AppContext';

import { auth, authWithGoogle } from '../services/googleAuth';

export function Authprovider({ children }) {
  const { userName, userEmail } = useContext(AppContext);
  const [googleAuth, setGoogleAuth] = useState(null);

  async function signInWithGoogle() {
    const result = await authWithGoogle();

    if (result.user) {
      const { displayName, photoURL, email } = result.user;

      if (!displayName || !photoURL || !email) {
        throw new Error('Missing information from google Account.');
      }

      setGoogleAuth({
        name: displayName,
        avatar: photoURL,
        email: email,
      });
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

        setGoogleAuth({
          name: displayName,
          avatar: photoURL,
          email: email,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

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
    googleAuth,
    verifyName,
    verifyEmail,
    signInWithGoogle,
  };
  return (
    <AuthContext.Provider value={infosToShare}>{children}</AuthContext.Provider>
  );
}

Authprovider.propTypes = {
  children: PropTypes.node,
};
