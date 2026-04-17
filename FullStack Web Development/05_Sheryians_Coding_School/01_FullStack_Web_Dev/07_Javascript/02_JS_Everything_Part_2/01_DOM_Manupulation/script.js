// Selecting Elements: getElementById, getElementsByClassName,querySelector,querySelectorAll

// let ab = document.getElementById("ab");
// let ab = document.getElementsByClassName("ab");
// let ab = document.querySelector("ab");
// let ab = document.querySelectorAll("h1");
// console.log(ab);

// Text/content manupulation

// let h1 = document.querySelector("h1");
// h1.innerHTML = "<i>Hi</i>";
// h1.innerText = "Hi";
// h1.textContent = "Hello";
// console.dir(h1)

// let a = document.querySelector("a");
// a.href = "https://www.google.com";
// a.setAttribute("href", "https://www.google.com");
// console.log(a.getAttribute("href"));
// a.removeAttribute("href");

// let h1 = document.createElement("h1");
// h1.textContent = "Hello";
// document.body.append(h1);
// document.body.prepend(h1);

// Styling using DOM
// let h1 = document.querySelector("h1");
// h1.style.color = "red";
// h1.style.backgroundColor = "blue"
// console.dir(h1)

// let h1 = document.querySelector("#text");
// h1.textContent = "Welcone to Sheriyan's";

//Q. Select all <li> element and print their text using a loop

// let li = document.querySelectorAll("li");

// Option 1.
// li.forEach((val) => {
//   console.log(val.textContent);
// });

// Option 2.
// for (let val of li) {
//   console.log(val.textContent);
// }

// Option 3.
// for (let i = 0; i < li.length; i++) {
//   console.log(li[i].textContent);
// }

// Q. Seclect a paragraph and replace its content with :
// <b>Updated</b> by JavaScript.

// let para = document.querySelector("p");
// para.innerHTML = "<b>Updated</b> by JavaScript.";
// let img = document.querySelector("img");
// console.log(img.src);
// console.log(img.getAttribute("src"));

// What does setAttribute() do ?

// let img = document
//   .querySelector("img")
//   .setAttribute(
//     "src",
//     "https://plus.unsplash.com/premium_photo-1773995755670-fa7e3b7372fe?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
//   );

// Select a link and update its href to point to https://www.sheriayans.com.

// let a = document
//   .querySelector("a")
//   .setAttribute("href", "https://www.sheryians.com");

// Add a title attribute to a div dynamically.

// let Div = document.querySelector("div");
// Div.setAttribute("title", "This is a title.");

//  Remove the disabled attribute from a button

// let btn = document.querySelector("button");
// btn.removeAttribute("disabled");

// Create a new list item <li>New Task</li> and add it to the end of a <ul>.

// let ul = document.querySelector("ul");
// let li = document.createElement("li");
// li.textContent = "New Task";
// ul.appendChild(li);

// Create a new image element with a placeholder source and add it at the top of a div.

// let img = document.createElement("img");
// img.setAttribute("src", "https://placehold.co/600x400");
// document.querySelector("div").prepend(img);

// Select the first item in a list and delete it from the DOM.
// let ul = document.querySelector("ul");
// let li = document.querySelector("li");
// ul.removeChild(li);

// Add a highlight to even item in a list.

// let li = document.querySelectorAll("ul li:nth-child(2n)");

// li.forEach(function(elem) {
//     elem.classList.add("highlight");
// })

// Set the font size of all <p> elements to 18px using .style

// let p = document.querySelectorAll("p");
// p.forEach(function (val) {
//   val.style.fontSize = "18px";
// });

