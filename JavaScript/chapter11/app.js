/* comment out each section once at a time to understand */

//Understanding Asynchronous Programming
//setTimeout() sets time for the execution of the given function
//Example___________________(Section - I)_____________________________________________________________________________________________________________________________________________________________________________________

// console.log("one");
// console.log("two");
// setTimeout(() => {
//   console.log("Hello");
// }, 5000); //Timeout in 5 seconds(Prints at console in 5 seconds)

// console.log("three");
// console.log("four");

//Understanding Callbacks
//Example_______________________________(Section -II)_______________________________________________________________________________________________________________________________________

// function sum(a, b) {
//   console.log(a + b);
// }

// function calculator(a, b, sumCallback) {
//   sumCallback(a, b);
// }

// calculator(2, 3, sum);
// calculator(4, 5, (a, b) => {
//   console.log(a * b);
// });

//Understanding cause of occurrence of Callback Hell
//Example(We want to execute some functions one by one after some time each)_____(Section -III)________________________________________________________________________________________________________________________________________

// function getData(dataId) {
//   setTimeout(() => {
//     console.log("data", dataId);
//   }, 3000);
// }
// getData(1); //takes 3 seconds
// getData(2); //takes 3 seconds
// getData(3); //takes 3 seconds
//Each executes simultaneously

//Example(Other way)__________________________________________________________(Section- IV)______________________________________________________________________________________________________________________________
// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("data", dataId);
//     getNextData();
//   }, 3000);
// }

// getData(1, getData(2)); //causes error coz it calls the getData(2) immediately

//Example (Another way)__________________________________________________(Section-V)_____________________________________________________________________________________________________________
// To Execute them one by one i.e., one after another

// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("data", dataId);
//     if (getNextData) {
//       //getNextdata exists only then it will execute.
//       getNextData();
//     }
//   }, 3000);
// }

// getData(1, () => {
//   console.log("getting data2...");
//   getData(2, () => {
//     console.log("getting data3...");
//     getData(3, () => {
//       console.log("getting data4...");
//       getData(4);
//     });
//   });
// });
//This such heavy code is not easy to understand
//It is called Callback Hell.

//Understanding Promises
//Example__________________________________________________________(Section-VI)____________________________________________________________________________________________________________

// let promise = new Promise((resolve, reject) => {
//   console.log("I am a promise.");
//   resolve("Succeeded!");
// });

// let promise2 = new Promise((resolve, reject) => {
//   console.log("I am a promise.");
//   reject("Failed!");
// });

//Example2_____________________________________________________________(Section-VII)___________________________________________________________________________________________________________________________
//promise is not build by programmers but it is built by javascript.(API)

// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("Success!"); //on resolving, it prints!
//       if (getNextData) {
//         getNextData();
//       }
//     }, 5000);
//   });
// }

// let promise = getData(123);
// console.log(promise); //prints state of the promise before its fulfillment
// setTimeout(() => {
//   console.log(promise);
// }, 5500);
//This prints the promise state 500ms after its fulfillment

//Understanding Promises-   .then() and .catch() functions
//Another Example____________________________(Section- VIII)_______________________________________________________________________________________________________________________________________
// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am a promise!");
//     resolve("Successful!");
//   });
// };

// let promise2 = getPromise();
// promise2.then((res) => {
//   console.log("promise fulfilled!\nMessage for You:", res);
// });

// promise2.catch((err) => {
//   console.log("promise rejected!\nMessage for You:", err);
// });

//Understanding promise chaining
//Example_______________________________________________________(Section-IX)_______________________________________________________________________________________________________________________
// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data1");
//       resolve("Success!");
//     }, 4000);
//   });
// }

// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data2");
//       resolve("Success!");
//     }, 4000);
//   });
// }

// console.log("fetching data1...");
// let p1 = asyncFunc1();
// p1.then((res) => {
//   console.log(res);
// });

// console.log("fetching data2...");
// let p2 = asyncFunc2();
// p2.then((res) => {
//   console.log(res);
// });
////This executes simultaneously.

//For one by one Fetching data(chaining of then)
//Example_______________________________________________________(Section-X)_______________________________________________________________________________________________________________________________________
// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data1");
//       resolve("Success!");
//     }, 4000);
//   });
// }

// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data2");
//       resolve("Success!");
//     }, 4000);
//   });
// }

// console.log("fetching data1...");
// // let p1 = asyncFunc1();
// // p1.then((res) => {
// //   console.log(res);
// //   console.log("fetching data2...");
// //   let p2 = asyncFunc2();
// //   p2.then((res) => {
// //     console.log(res);
// //   });
// // });
// //Another way to write
// asyncFunc1().then((res) => {
//   console.log(res);
//   console.log("fetching data2...");
//   asyncFunc2().then((res) => {
//     console.log(res);
//   });
// });

//Example_______________________________________________________(Section-XI)__________________________________________________________________________________________________________________________________________________________________________________
//Solving by promise chaining
// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("Success!");
//     }, 3000);
//   });
// }

// getData(1)
//   .then(() => {
//     return getData(2);
//   })
//   .then(() => {
//     return getData(3);
//   })
//   .then((res) => {
//     console.log(res);
//   });

//Understanding Async-Await
//Example_____________________________________________________(Section-XII)________________________________________________________________________________________________________________________

// async function

// async function hello() {
//   console.log("hello"); //It implicitly returns promise
// }
// hello();     run this line on console

//Example______________________________________________________________________________________(Section-XIII)________________________________________________________________________________________________________________________________

// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Weather Data");
//       resolve(200);
//     }, 2000);
//   });
// }

// async function getWeatherData() {
//   await api(); //runs 1st
//   await api(); //runs next
//   await api(); //runs next
//   await api(); //runs next
// }

// getWeatherData();   //run this line on console

//Another Example _____________________________________________________(Section-XIV)________________________________________________________________________________________________________________________

// function getData(DataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data", DataId);
//       resolve(200);
//     }, 2000);
//   });
// }
// async function getAllData() {
//   console.log("fetching data1...");
//   await getData(1);
//   console.log("fetching data2...");
//   await getData(2);
//   console.log("fetching data3...");
//   await getData(3);
// }

// getAllData();   //run this line on console

//Understanding IIFE(Immediately Invoked Function Expression)

function getData(DataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data", DataId);
      resolve(200);
    }, 2000);
  });
}
(async function getAllData() {
  console.log("fetching data1...");
  await getData(1);
  console.log("fetching data2...");
  await getData(2);
  console.log("fetching data3...");
  await getData(3);
})();
