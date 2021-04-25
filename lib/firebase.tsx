import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig: Object = {
  apiKey: "AIzaSyCunj9XkJkD08H0XYrNevd7m4scbubQhW0",
  authDomain: "nextfire-app-e385f.firebaseapp.com",
  projectId: "nextfire-app-e385f",
  storageBucket: "nextfire-app-e385f.appspot.com",
  messagingSenderId: "932515481363",
  appId: "1:932515481363:web:6ffd764e3bb186bdf07ce6",
};

if (!firebase.apps.length) {
  //keeps from reinit due to next sometimes double running
  firebase.initializeApp(firebaseConfig);
}

export const auth: firebase.auth.Auth = firebase.auth();
export const googleAuthProvider: firebase.auth.GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore: firebase.firestore.Firestore = firebase.firestore();
export const storage: firebase.storage.Storage = firebase.storage();

export async function getUserWithUsername(username: string) {
  //get the users collection
  //query for username match
  //get the document
  //return it
  const userRef = firestore.collection("users");
  const query = userRef.where("username", "==", username).limit(1);
  const userDoc = (await query.get()).docs[0];

  return userDoc;
}

export function postToJSON(doc: firebase.firestore.QueryDocumentSnapshot) {
  const data = doc.data();
  return {
    ...data,
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  };
}
