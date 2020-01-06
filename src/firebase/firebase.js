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

const database = firebase.database();

database.ref().set({
  name: "Juwan Petty",
  age: 23,
  isSingle: true,
  location: {
    city: "Atlanta",
    country: "United States"
  }
});

database.ref("age").set(22);
database.ref("location/city").set("Savannah");

database.ref("attributes").set({
  height: "5, 11",
  weight: "150 lbs"
});
