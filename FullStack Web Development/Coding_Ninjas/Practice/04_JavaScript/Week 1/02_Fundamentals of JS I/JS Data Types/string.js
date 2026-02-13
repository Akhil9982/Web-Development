// String methods in JS

let str = "JavaScript is wonderful!";

let str2 = "It is dynamically typed.";

console.log(str.__proto__);

console.log(str.charAt(5));

console.log(str.concat(str2));
console.log(str.length);

console.log(str.indexOf("a"));
console.log(str.indexOf("i", 8));

let message = "Hello! World!";
let character = message.charAt(15);
console.log(character);

function lowerCaseString(str1, str2) {
  let answer;
  // You have been provided with two input strings as parameters: str1 and str2
  // Example: str1 = "JOHN", str2 = "DOE"
  // Do not define or assign values to these inputs; they are provided automatically.

  // Task:
  // 1. Convert str1 and str2 to lowercase.
  // 2. Concatenate the two lowercase strings together.
  // 3. Store the result in the variable 'answer' below.

  // Write your logic here:

  let firstname = str1.toLowerCase();
  console.log(str1.toLowerCase());

  let lastname = str2.toLowerCase();
  console.log(str1.concat(str2));
  answer = firstname + lastname;

  return answer; // The final concatenated string will be returned from here.
}

const number1 = 5;
const number2 = 10;
const result = number1 + number2;
console.log(result);


const sentence = "Hello, World";
const charToFind = 'o';
const indexofChar = sentence.indexOf(charToFind).toUpperCase().charAt(1);

console.log(indexofChar) 

// **************************************************************

function concatString(str1, str2) {
  // You are provided with two input strings: str1 and str2.
  // Do not define or assign values to these inputs. They are passed automatically by the test cases.

  let concat;

  // Write your logic here:
  // Use a string method to concatenate str1 and str2, then store the result in 'concat'
  concat = str1.concat(str2);
  return concat;
}

function indexOfWorld(str1, str2) {
  // You are provided with two input strings: str1 and str2.
  // Do not define or assign values to these inputs. They are passed automatically by the test cases.

  let indexOfworld;

  // Write your logic here:
  // 1. Concatenate str1 and str2.
  // 2. Find the index of "World" in the concatenated string.
  // 3. Store the index in 'indexOfworld'.
  let concat = str1.concat(str2);
  indexOfworld = concat.indexOf("World");
  return indexOfworld;
}
