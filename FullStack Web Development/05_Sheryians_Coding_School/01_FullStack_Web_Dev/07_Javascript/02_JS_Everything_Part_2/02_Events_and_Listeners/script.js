// Common events: Click Event Listener

// let p = document.querySelector("p");
// p.addEventListener("click", function () {
//   p.style.backgroundColor = "green";
// });

// function dblclick() {
//   p.style.color = "yellow";
// }
// p.addEventListener("dblclick", dblclick);
// p.removeEventListener("dblclick", dblclick);

// let input = document.querySelector("input");

// input.addEventListener("input", function (evt) {
//   if (evt.data !== null) {
//     console.log(evt.data);
//   }
// });

// change event
// let sel = document.querySelector("select");
// let h3 = document.querySelector("h3");

// sel.addEventListener("change", function (evt) {
//   if (evt.type == "change") {
//     h3.textContent = `Selected Device ${evt.target.value}`;
// console.log(evt.target.value);
//   }
// });

// if (sel && h3) {
//   sel.addEventListener("change", function (evt) {
//     h3.textContent = `Selected Device ${evt.target.value}`;
//   });
// }

// Display Keystrokes in place of the charecters on the screen

// let h1 = document.querySelector("h1");
// window.addEventListener("keydown", function (evt) {
//   if(evt.key === " "){
//     h1.textContent = "Space"
//   }else{
//     h1.textContent = evt.key
//   }
// });

// let btn = document.querySelector("button");
// let inp = document.querySelector("input");

// btn.addEventListener("click", function (val) {
//   inp.click();
// });

// inp.addEventListener("change", function (val2) {
//   let fileinp = val2.target.files[0];
//   if (fileinp) {
//     btn.textContent = fileinp.name;
//   } else if ("undefined") {
//     alert("Please Try Again");
//     btn.textContent = "Try Again";
//   }
// });

// let form = document.querySelector("form");
// let inputs = document.querySelectorAll("input");
// let main = document.querySelector("#main");

// form.addEventListener("submit", function (val) {
//   val.preventDefault();

//   let card = document.createElement("div");
//   card.classList.add("card");

//   let profile = document.createElement("div");
//   profile.classList.add("profile");

//   let img = document.createElement("img");
//   img.setAttribute("src", inputs[0].value);
//   img.setAttribute("alt", "Profile img");
//   let h3 = document.createElement("h3");
//   h3.textContent = inputs[1].value;
//   let h5 = document.createElement("h5");
//   h5.textContent = inputs[2].value;
//   let p = document.createElement("p");
//   p.textContent = inputs[3].value;

//   profile.appendChild(img);
//   card.appendChild(profile);

//   card.appendChild(h3);
//   card.appendChild(h5);
//   card.appendChild(p);

//   main.appendChild(card);
//   inputs.forEach(function (inp) {
//     if (inp.type !== "submit") {
//       inp.value = "";
//     }
//   });
// });

// MouseOut and mouseover

// let abcd = document.querySelector("#abcd");

// abcd.addEventListener("mouseover",function(){
//     abcd.style.backgroundColor = "Yellow";
// })

// abcd.addEventListener("mouseout",function(){
//     abcd.style.backgroundColor = "red";
// })

// let abcd = document.querySelector("#abcd");
// window.addEventListener("mousemove", function (val) {
//   abcd.style.top = val.clientY + "px";
//   abcd.style.left = val.clientX + "px";
// });

// Event Object

// PreventDefault()
// let form = document.querySelector("form");

// form.addEventListener("submit", function (dets) {
//   dets.preventDefault();
// });

// Event Bubling

// document.querySelector("#nav").addEventListener("click", function () {
//   alert("clicked");
// });

// let ul = document.querySelector("ul");

// ul.addEventListener("click", function (dets) {
//   dets.target.classList.toggle("lt");
// });


