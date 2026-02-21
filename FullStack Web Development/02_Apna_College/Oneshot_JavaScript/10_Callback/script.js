// function sum(a, b) {
//   console.log(a + b);
// }

// function calculator(a, b, sumCallback) {
//   sumCallback(a, b);
// }

// calculator(1, 2, sum);

// calculator(1, 2, (a, b) => {
//   console.log(a + b);
// });

// const hello = () => {
//   console.log("hello");
// };

// setTimeout(hello, 3000);

// CallBack Hell

// function getData(dataID, getNextData) {
//   setTimeout(() => {
//     console.log("data", dataID);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }

// getData(1, () => {
//     console.log("getting the data2 ....")
//   getData(2, () => {
//     console.log("getting the data3 ....");
//     getData(3, () => {
//         console.log("getting the data4 ....");
//       getData(4);
//     });
//   });
// });

// Promises

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     // reject("Network Error");
//     resolve("success");
//   });
// };

// let promise = getPromise();

// promise.then((res) => {
//   console.log("Promise Fulfiled", res);
// });

// promise.catch((err) => {
//   console.log("rejected", err);
// });
// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       //   console.log("data", dataId);
//       //   resolve("success");
//       reject("error");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 5000);
//   });
// }

// Promise Chain
// function asyncFunc() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data1");
//       resolve("success");
//     }, 4000);
//   });
// }

// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data2");
//       resolve("success");
//     }, 4000);
//   });
// }

// console.log("fetching data1....");
// let p1 = asyncFunc();
// p1.then((res) => {
//   console.log("fetching data2....");
//   let p2 = asyncFunc2();
//   p2.then((res) => {
//   });
// });

// Similar way

// console.log("fetching data1....");
// asyncFunc().then((res) => {
//   console.log("fetching data2....");
// asyncFunc2().then((res) => {});
// });

// console.log("fetching data2....");
// let p2 = asyncFunc2();
// p2.then((res) => {
//   console.log(res);
// });

// function getData(dataID) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataID);
//       resolve("success");
//     }, 2000);
//   });
// }

// getData(1)
//   .then((res) => {
//     return getData(2);
//   })
//   .then((res) => {
//     return getData(3);
//   })
//   .then((res) => {
//     console.log(res);
//   });

// Async-Await

function weatherApi() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data");
      resolve(200);
    }, 2000);
  });
}

async function getWeatherData() {
  await weatherApi();
  await weatherApi();
}

function getData(dataID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataID);
      resolve("success");
    }, 2000);
  });
}

async function getAllData(){
    await getData(1);
    await getData(2);
}

// IIFE Conversion

(async function () {
    console.log("getting data 1.....")
  await getData(1);
  console.log("getting data 2.....");
  await getData(2);
})();