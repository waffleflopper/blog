import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig: Object = {
    apiKey: "AIzaSyCunj9XkJkD08H0XYrNevd7m4scbubQhW0",
    authDomain: "nextfire-app-e385f.firebaseapp.com",
    projectId: "nextfire-app-e385f",
    storageBucket: "nextfire-app-e385f.appspot.com",
    messagingSenderId: "932515481363",
    appId: "1:932515481363:web:6ffd764e3bb186bdf07ce6"
  };

  if (!firebase.apps.length) { //keeps from reinit due to next sometimes double running
      firebase.initializeApp(firebaseConfig);
  }

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()
  export const storage = firebase.storage()