/** Scope in JS */

// Global
// Function(Local)
// Block

var a = 10;
let b = 20;
// const c = 30;

// function print() {
//   var a = "ten";
//   let b = "twenty";

//   console.log("****** Inside print Function *******");
//   console.log(a, b, c);
//   console.log("***** *****");

//   function innerPrint() {
//     var a = "inner10";
//     console.log("*Inside innerPrint Function*");
//     console.log(a, b, c);
//   }
//   innerPrint();
// }
// console.log(a, b, c);
// print();

// console.log(`a: ${a}, b: ${b}`);

// var a = 55;
// console.log(`a: ${a}`);

function outer(){
  let x = 10;
  if(true){
    let y = 20;
    var z = 30;
    console.log(x + y + z);
  }
  console.log(x + y + z);
}
outer()