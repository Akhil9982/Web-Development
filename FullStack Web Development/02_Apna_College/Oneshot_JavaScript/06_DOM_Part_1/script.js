// What is DOM ?
// The DOM stands for Document Object Model. It helps us to dynamically manipulate the objects/elements in a webpage without changing the original HTML file.

// DOM Manupulation
// Selecting with ID

// let heading = document.getElementById("heading");
// console.dir(heading);

// Selecting with class

// let headings = document.getElementsByClassName("heading");
// console.dir(headings);
// console.log(headings)

// Selecting with Tag

// let parahs = document.getElementsByTagName("p");
// console.dir(parahs);

// Query Selector

// let elements = document.querySelector("p");
// console.dir(elements);

// let allEl = document.querySelectorAll("p");
// console.dir(allEl);

// console.dir(document.body.firstChild);

// let div = document.querySelector("div");
// console.dir(div);

// let heading = document.querySelector("h1");

// heading.innerHTML = "<i>new Heading</i>";

// Practice Questions

// Qs. Create a H2 heading element with text - "Hello JavaScript". Append "from Apna College students" to this text using JS.

let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + " from Apna College students";

console.dir(h2.innerText);

// Create 3 divs with common class name - "box". Access them & add some unique text to each of them.

let divs = document.querySelectorAll(".box");
// console.log(divs);
// Loop through the NodeList and log each div
let idx = 1;
for (div of divs) {
  div.innerText = `new unique text ${idx}`;
  idx++;
}

// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";
