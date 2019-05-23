import * as firebase from 'firebase'
// import firebase from 'firebase/app'
// import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyBxNCQLerwXS6ekXGYwPjbcVGFlaSf5m1Y",
  authDomain: "vue-crud-ex.firebaseapp.com",
  databaseURL: "https://vue-crud-ex.firebaseio.com",
  projectId: "vue-crud-ex",
  storageBucket: "vue-crud-ex.appspot.com",
  messagingSenderId: "422786198039",
  appId: "1:422786198039:web:07639d5d0b5c2103"
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()

export const awardsCollection = firebase.firestore().collection('awards');

// import firebase from 'firebase';

// const app = firebase.initializeApp({
//     apiKey: "AIzaSyBxNCQLerwXS6ekXGYwPjbcVGFlaSf5m1Y",
//     authDomain: "vue-crud-ex.firebaseapp.com",
//     databaseURL: "https://vue-crud-ex.firebaseio.com",
//     projectId: "vue-crud-ex",
//     storageBucket: "vue-crud-ex.appspot.com",
//     messagingSenderId: "422786198039",
//     appId: "1:422786198039:web:07639d5d0b5c2103"
//   });

// export const db = app.firestore();
// export const awardsCollection = db.collection('awards').orderBy('text');
