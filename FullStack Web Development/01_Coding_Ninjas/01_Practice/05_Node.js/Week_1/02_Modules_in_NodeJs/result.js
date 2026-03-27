//  Call arithematic functions, get result and print result on terminal.
//  How to import a module

// 1. common Js

// const arithmeticModule = require("./arithmatic");

//  Call sum function

// const result = arithmeticModule(10, 20);
// console.log(result);

// Using the ES6 import module
import * as arithematicModule from "./arithmatic.js";

// console.log(sum(10, 20));
// console.log(arithmaticModule.div(100, 20));
// console.log(arithmaticModule.num);
// console.log(num);
console.log(arithematicModule.sum(10, 20));
