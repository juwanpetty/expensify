import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDirmBAUKfcjQzFQESYtsGmim8RiERZSEo",
  authDomain: "expensify-33735.firebaseapp.com",
  databaseURL: "https://expensify-33735.firebaseio.com",
  projectId: "expensify-33735",
  storageBucket: "expensify-33735.appspot.com",
  messagingSenderId: "15708380817",
  appId: "1:15708380817:web:f45d1a6a6c907da0d56930"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase
  .database()
  .ref()
  .set({
    name: "Juwan Petty"
  });
