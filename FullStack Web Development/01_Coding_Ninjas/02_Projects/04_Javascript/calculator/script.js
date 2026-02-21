// Kindly do not modify the prewritten code.
// Your task is to implement the functions below to make the calculator work.

let display = document.getElementById("display");
let currentInput = "";

function clearDisplay() {
  currentInput = "";
  display.textContent = "0";
}

function deleteLast() {
  if (currentInput.length === 0) return;
  currentInput = currentInput.slice(0, -1);
  display.textContent = currentInput.length ? currentInput : "0";
}

function appendNumber(number) {
  currentInput += number;
  display.textContent = currentInput;
}

function appendOperator(operator) {
  if (!currentInput) {
    if (operator !== "-") return;
    currentInput = "-";
    display.textContent = currentInput;
    return;
  }

  const lastChar = currentInput[currentInput.length - 1];
  if (
    lastChar === "+" ||
    lastChar === "-" ||
    lastChar === "*" ||
    lastChar === "/" ||
    lastChar === "%"
  ) {
    currentInput = currentInput.slice(0, -1) + operator;
  } else {
    currentInput += operator;
  }
  display.textContent = currentInput;
}

function calculateResult() {
  if (!currentInput) return;
  try {
    // Replace all numbers followed by % with (number/100)
    let expression = currentInput.replace(/(\d+(\.\d+)?)%/g, "($1/100)");
    const result = Function('"use strict";return (' + expression + ")")();
    if (!Number.isFinite(result)) throw new Error("Invalid");
    currentInput = String(result);
    display.textContent = currentInput;
  } catch (error) {
    currentInput = "";
    display.textContent = "Error";
  }
}