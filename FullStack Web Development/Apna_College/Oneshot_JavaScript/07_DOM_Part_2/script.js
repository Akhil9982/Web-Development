// Arttributes

// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.setAttribute("class","newClass"));

// Style

// let div = document.querySelector("div");

// div.style.backgroundColor = "green";

// div.style.fontSize = "26px";

// // div.style.visibility = "hidden";

// div.innerText = "Hello!";

// Insert Elements

// let newBtn = document.createElement("button");
// newBtn.innerText = "click Me!";
// console.log(newBtn);

// let div = document.querySelector("div");
// div.after(newBtn);

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i> Hi, I am new!</i>";

// document.querySelector("body").prepend(newHeading);

// // Delete Element

// let para = document.querySelector("p");
// para.remove();

// newHeading.remove();

// let heading = document.querySelector("h1")

// heading.remove()

// Practice Questions

//Qs.  Create a new button element.Give it a text "click me", background color of red & text color of white.

// Insert the button as the first element inside the body tag.

let btn = document.createElement("button");

btn.innerText = "Click Me";
btn.style.backgroundColor = "red";
btn.style.color = "white";

console.log(btn);

document.querySelector("body").prepend(btn);

// Qs. Create a <p> tag in html, give it a class & some styling.

// Now create a new class in CSS and try to append this class to the <p> element.

// Did you notice how you have overwritten the class name when you add a new one ?. Solve the problem using classList.

let para = document.querySelector("p");

para.classList.add("newClass");

console.log(para);

// para.classList.remove("newClass");