import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAGpBRLcYewE4LHHyfwTabzikoCmWJC2XE",
  authDomain: "lunch-rush-31e7b.firebaseapp.com",
  databaseURL: "https://lunch-rush-31e7b.firebaseio.com",
  projectId: "lunch-rush-31e7b",
  storageBucket: "lunch-rush-31e7b.appspot.com",
  messagingSenderId: "836040971789"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
