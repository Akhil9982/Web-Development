let count = 0;
let seconds = 10;
let progress = document.querySelector(".progress");
let percentage = document.querySelector("#percentage");
let startbtn = document.querySelector("#startBtn");
let downheading = document.querySelector("#downheading");
let intv = null;

startbtn.addEventListener("click", function () {
  if (intv) {
    clearInterval(intv);
    intv = null;
  }

  if (count > 100) {
    count = 0;
    progress.style.width = "0%";
    percentage.textContent = "0%";
    downheading.textContent = "Downloading File...";
    startbtn.textContent = "Start Download";
  }

  intv = setInterval(
    function () {
      if (count <= 100) {
        progress.style.width = `${count}%`;
        percentage.textContent = `${count}%`;
        count++;
      } else {
        clearInterval(intv);
        downheading.textContent = "Downloaded";
      }
    },
    (seconds * 1000) / 100,
  );
});
