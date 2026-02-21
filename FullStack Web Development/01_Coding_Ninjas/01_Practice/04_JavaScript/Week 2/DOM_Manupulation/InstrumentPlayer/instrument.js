// Create eventListener to all the button 
// All button should be able to play a different sound.

// 1. Handle Button Clicks
const drumButtons = document.querySelectorAll(".drum");

drumButtons.forEach(button => {
  button.addEventListener("click", function () {
    const key = this.innerText.toLowerCase();
    makeSound(key);
    buttonAnimation(key);
  });
});

// 2. Handle Keyboard Keypress
document.addEventListener("keydown", function (event) {
  const key = event.key.toLowerCase();
  makeSound(key);
  buttonAnimation(key);
});

// 3. Core Audio Function
function makeSound(key) {
  switch (key) {
    case "w": new Audio("sounds/tom-1-28537.mp3").play(); break;
    case "a": new Audio("sounds/tom-2-28541.mp3").play(); break;
    case "s": new Audio("sounds/tom-3-28542.mp3").play(); break;
    case "d": new Audio("sounds/tom-4-28543.mp3").play(); break;
    case "j": new Audio("sounds/snare-28545.mp3").play(); break;
    case "k": new Audio("sounds/crash-28546.mp3").play(); break;
    case "l": new Audio("sounds/kick-bass-28547.mp3").play(); break;
    default: console.log("Key not mapped: " + key);
  }
}

// 4. Feedback Animation
function buttonAnimation(currentKey) {
  const activeButton = document.querySelector(`.${currentKey}`);
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(() => {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}
