import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { Auth_Credentials } from './../types/index';

import { firebaseConfig } from './../../../utils/firebase';

firebase.initializeApp(firebaseConfig);

// var database = firebase.database();

export const registerUser = ({ email, password }: Auth_Credentials) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user: any) => user)
    .catch((error: Error) => Promise.reject(error));
};

export const loginUser = ({ email, password }: Auth_Credentials) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user: any) => user)
    .catch((error: Error) => Promise.reject(error));
};

export const logoutUser = () => {
  return firebase
    .auth()
    .signOut()
    .then(function () {
      // Sign-out successful.
    })
    .catch((error: Error) => Promise.reject(error));
};
