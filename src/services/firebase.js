import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBsdOSaIM5VB54NOCtNHNyYp0sCefXbMwE",
  authDomain: "the-bucket-list-9ca68.firebaseapp.com",
  databaseURL: "https://the-bucket-list-9ca68.firebaseio.com",
  projectId: "the-bucket-list-9ca68",
  storageBucket: "",
  messagingSenderId: "327591023009"
};

const firebaseApp = firebase.initializeApp(config);

export const auth = firebaseApp.auth();

export const providers = firebase.auth;