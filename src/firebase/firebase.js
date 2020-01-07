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

database.ref("expenses").on("child_removed", snapshot => {
  console.log("snapshot.key", snapshot.val());
});

database.ref("expenses").on("child_changed", snapshot => {
  console.log("snapshot.key", snapshot.val());
});

database.ref("expenses").on("child_added", snapshot => {
  console.log("snapshot.key", snapshot.val());
});

// database.ref("expenses").on("value", snapshot => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// });

// database
//   .ref("expenses")
//   .once("value")
//   .then(snapshot => {
//     // console.log(snapshot.val());

//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// database.ref("notes/-Ly-YTYUcT4fnM9taNWG").remove();

// database.ref("notes").push({
//   title: "Course Topics",
//   body: "React Native, Angular, Python"
// });

// database.ref().on("value", snapshot => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// database.ref("job/company").set("Steam");

// const onValueChange = database.ref().on(
//   "value",
//   snapshot => {
//     console.log(snapshot.val());
//   },
//   error => {
//     console.log("Error with data fetching:", error);
//   }
// );

// setTimeout(() => {
//   database.ref("age").set(21);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref("age").set(30);
// }, 10500);

// database
//   .ref()
//   .once("value")
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(error => {
//     console.log("Error fetching data", error);
//   });

// database
//   .ref()
//   .set({
//     name: "Juwan Petty",
//     age: 23,
//     stressLevel: 6,
//     job: {
//       title: "Software Developer",
//       company: "Google"
//     },
//     location: {
//       city: "Atlanta",
//       country: "United States"
//     }
//   })
//   .then(() => {
//     console.log("Data is saved.");
//   })
//   .catch(error => {
//     console.log("This failed.", error);
//   });

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seattle"
// });

// database
//   .ref("isSingle")
//   .remove()
//   .then(() => {
//     console.log("Remove succeeded.");
//   })
//   .catch(error => {
//     console.log("Remove failed:", error.message);
//   });
