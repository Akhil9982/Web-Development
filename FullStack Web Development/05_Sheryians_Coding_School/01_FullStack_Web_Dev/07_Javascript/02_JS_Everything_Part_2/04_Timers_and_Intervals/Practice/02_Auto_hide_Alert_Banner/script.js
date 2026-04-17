let seconds = 3;
let banner = document.querySelector("#banner");
let closeBtn = document.querySelector("#closeBtn");

let timeoutId;

function hideBanner() {
  if (!banner.classList.contains("hide")) {
    banner.classList.add("hide");
  }
}

timeoutId = setTimeout(() => {
  hideBanner();
}, seconds * 1000);

closeBtn.addEventListener("click", () => {
  hideBanner();
  clearTimeout(timeoutId);
});