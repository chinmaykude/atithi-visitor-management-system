// Use firebase v8 imports if the project has firebase@8 installed so
// existing calls like firebase.auth() and firebase.firestore() work.
// Use firebase compat layer to retain v8 namespaced API (firebase.auth(), firebase.firestore())
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "YOUR_API_KEY",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "YOUR_AUTH_DOMAIN",
  databaseURL:
    process.env.REACT_APP_FIREBASE_DATABASE_URL || "YOUR_DATABASE_URL",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "YOUR_PROJECT_ID",
  storageBucket:
    process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "YOUR_STORAGE_BUCKET",
  messagingSenderId:
    process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID ||
    "YOUR_MESSAGING_SENDER_ID",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "YOUR_APP_ID",
  measurementId:
    process.env.REACT_APP_FIREBASE_MEASUREMENT_ID || "YOUR_MEASUREMENT_ID"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

// Collections used across the app
const fBaseVisitorRegister = db.collection("visitorRegister");
const fBaseAddVisitDetails = db.collection("visitDetails");

export { db, fBaseVisitorRegister, fBaseAddVisitDetails };
export default firebase;
