// global scope

// console.log(this);

// function scope

// function abcd() {
//   console.log(this);
// }
// abcd();

// Method
// let obj = {
//   name: "Akhil",
//   sayName: function () {
//     let defg = () => {
//       console.log(this);
//     }
//     defg();
//   },
// };
// obj.sayName();

// event Handler

// let h1 = document.querySelector("h1");

// h1.addEventListener("click", function () {
//   console.log(this);
// });

// class

// class Abcd {
//   constructor() {
//     console.log("hi");
//     this.a = 12;
//   }
// }

// let val = new Abcd();
// console.log(val);

// Maual binding :
// call apply bind

// call

// let obj = {
//   name: "Akhil",
// };

// function abcd(a, b, c) {
//   console.log(this, a, b, c);
// }

// abcd.call(obj, 1, 2, 3);

let obj = {
  name: "Akhil",
};

function abcd(a, b, c) {
  console.log(this, a, b, c);
}

let fnc = abcd.apply(obj,[1, 2, 3]);
fnc();
