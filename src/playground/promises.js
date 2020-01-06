const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: "Juwan",
    //   age: 22
    // });

    reject("Something went wrong!");
  }, 1500);
});

promise
  .then(data => {
    console.log("Data", data);
  })
  .catch(error => {
    console.log("Error", error);
  });

// promise.then(
//   data => {
//     console.log("Data", data);
//   },
//   error => {
//     console.log("Error", error);
//   }
// );
