// set Timeout
// let to = setTimeout(() => {
//     console.log("hello");

// }, 1000);

// clearTimeout(to);

// setInterval

// let sinterval = setInterval(() => {
//     console.log("hey");

// }, 1000);

// clearInterval(sinterval);

let count = 10;

let interval = setInterval(() => {
  if (count >= 0) {
    console.log(count);
    count--;
  } else {
    clearInterval(interval);
  }
}, 1000);
