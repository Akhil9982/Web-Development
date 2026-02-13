const sentences = `The quick brown fox jumps over the lazy dog . Sphinx of black quartz, judge my vow . Pack my box with five dozen liquor jugs . How vexingly quick daft zebras jump !`;

const sentenceElement = document.getElementById("sentence");
const inputElement = document.getElementById("input");
const startButton = document.getElementById("start-btn");
const timerElement = document.getElementById("timer");
const speedElement = document.getElementById("speed");
const accuracyElement = document.getElementById("accuracy");
const resultElement = document.getElementById("result");
const retryButton = document.getElementById("retry-btn");

// Timer duration (seconds)
const TIMER_DURATION = 30;
let timerId = null;

// Initialize timer display
timerElement.textContent = formatTime(TIMER_DURATION);

// Utility: format seconds as MM:SS
function formatTime(seconds) {
  const mm = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const ss = (seconds % 60).toString().padStart(2, "0");
  return `${mm}:${ss}`;
}


// Start test handler
startButton.addEventListener("click", startTest);
retryButton.addEventListener("click", retryTest);

function startTest() {
  // Clear any existing timer
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }

  // Prepare UI
  sentenceElement.textContent = sentences;
  inputElement.value = "";
  inputElement.disabled = false;
  inputElement.focus();
  startButton.disabled = true;
  resultElement.style.display = "none";

  // Start countdown
  let timeLeft = TIMER_DURATION;
  timerElement.textContent = formatTime(timeLeft);

  timerId = setInterval(() => {
    timeLeft -= 1;
    timerElement.textContent = formatTime(timeLeft);

    if (timeLeft <= 0) {
      clearInterval(timerId);
      timerId = null;
      endTest();
    }
  }, 1000);
}

// End test: compute speed & accuracy, show results
function endTest() {
  // Disable inputs
  inputElement.disabled = true;
  startButton.disabled = true;

  const typed = inputElement.value;
  const original = sentenceElement.textContent || "";

  // Calculate correct words (word-by-word comparison)
  const typedWords = typed.trim().length ? typed.trim().split(/\s+/) : [];
  const originalWords = original.trim().length
    ? original.trim().split(/\s+/)
    : [];
  let correctWords = 0;
  for (let i = 0; i < typedWords.length; i++) {
    if (typedWords[i] === originalWords[i]) correctWords++;
  }

  // WPM based on correctly typed words scaled to per-minute
  const minutes = TIMER_DURATION / 60;
  const wpm = minutes > 0 ? Math.round(correctWords / minutes) : 0;

  // Character-level accuracy
  let correctChars = 0;
  const minLen = Math.min(typed.length, original.length);
  for (let i = 0; i < minLen; i++) {
    if (typed[i] === original[i]) correctChars++;
  }
  const accuracy = typed.length ? (correctChars / typed.length) * 100 : 0;

  // Show results
  speedElement.textContent = wpm;
  accuracyElement.textContent = accuracy.toFixed(2);
  resultElement.style.display = "block";
}

// Retry test: reset UI and timer
function retryTest() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }

  startButton.disabled = false;
  resultElement.style.display = "none";
  inputElement.value = "";
  inputElement.disabled = true;
  timerElement.textContent = formatTime(TIMER_DURATION);
  sentenceElement.textContent = "";
  speedElement.textContent = "";
  accuracyElement.textContent = "";
}