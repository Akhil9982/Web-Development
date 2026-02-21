/** Events in JS
 *
 *  The change in the state of an object is known as an Event.
 *
 *  Events are fired to notify code of "intresting changes" that may affect code execution.
 *
 *  Mouse events (click, double click etc.)
 *  Keyboard events (Keypress, keyup, keydown)
 *  Form events (submit etc.)
 *  Print event & many more
 */

// let newBtn = document.querySelector("#btn1");

// newBtn.onclick = (evt) => {
//   console.log("Button is clicked");
// };

// let div = document.querySelector("div");

// div.onmouseover = () => {
//   console.log("You are inside the div");
// };

/** Event Object
 *
 * It is a special object that has details abount the event.
 * All event handlers have access to the Event Object's Properties and methods.
 */
// let newBtn1 = document.querySelector("#btn2");

// newBtn1.onclick = (evt) => {
//   console.log(evt);
//   console.log(evt.type);
//   console.log(evt.target);
//   console.log(evt.clientX, evt.clientY);
// };

/** Event Listeners */

// let newBtn3 = document.querySelector("#btn3");

// newBtn3.onclick = (evt) => {
//   console.log(evt);
//   console.log(evt.type);
//   console.log(evt.target);
//   console.log(evt.clientX, evt.clientY);
// };

// newBtn3.addEventListener("click", (evt) => {
//   console.log("button3 was clicked - Handler 1");
//   console.log(evt);
//   console.log(evt.type);
// });

// newBtn3.addEventListener("click", () => {
//   console.log("button3 was clicked - Handler 2");
// });

// const handler3 = () => {
//   console.log("button3 was clicked - Handler 3");
// };

// newBtn3.addEventListener("click", handler3);

// newBtn3.addEventListener("click", () => {
//   console.log("button3 was clicked - Handler 4");
// });

// newBtn3.removeEventListener("click", handler3);

/** Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again. */

// let btn4 = document.querySelector("#btn1");
// let body = document.querySelector("body");
// let isblack = false;
// btn4.addEventListener("click", () => {
//   if (isblack) {
//     body.style.backgroundColor = "white";
//     body.style.color = "black";
//   } else {
//     body.style.backgroundColor = "black";
//     body.style.color = "white";
//   }
//   isblack = !isblack;
// });

let btn4 = document.querySelector("#btn1");
let currMode = "light";
let body = document.querySelector("body");
let heading = document.querySelector("h1");

// Add transition just once at the start
body.style.transition = "background-color 1s ease-in-out, color 1s ease-in-out";
heading.style.transition = "color 1s ease-in-out";

body.style.transition = "background-color 1s ease-in-out, color 1s ease-in-out";

btn4.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("h1").style.color = "white";
  } else {
    currMode = "light";
    document.querySelector("body").style.backgroundColor = "white"
    document.querySelector("h1").style.color = "black";
  }
  console.log(currMode);
});