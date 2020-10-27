import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDbCEi0Mynj3hvW_x73fwybaRqjwAUGNBg",
  authDomain: "storemanager-dfe02.firebaseapp.com",
  databaseURL: "https://storemanager-dfe02.firebaseio.com",
  projectId: "storemanager-dfe02",
  storageBucket: "storemanager-dfe02.appspot.com",
  messagingSenderId: "279517551995",
  appId: "1:279517551995:web:e0751015370fce690571de",
  measurementId: "G-6LWQR0VLZH"
};

firebase.initializeApp(config);

export default firebase;