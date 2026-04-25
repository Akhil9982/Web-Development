// All Variables and doc selections
let addCardbtn = document.querySelector("#add-card-btn");
let formSection = document.querySelector(".form-section");
let form = document.querySelector("form");
let upBtn = document.querySelector("#upbtn");
let downBtn = document.querySelector("#downbtn");
let cancelBtn = document.querySelector("#cancel-btn");
let cardsStack = document.querySelector(".cards-stack");
let titleInp = document.querySelector("#titleinp");
let dateTimeinp = document.querySelector("#date_time_inp");
let categoryRadios = form.querySelectorAll("input[name='type']");

function saveToLocalStorage(obj) {
  if (localStorage.getItem("tasks") === null) {
    let oldTasks = [];
    oldTasks.push(obj);
    localStorage.setItem("tasks", JSON.stringify(oldTasks));
  } else {
    let oldTasks = localStorage.getItem("tasks");
    oldTasks = JSON.parse(oldTasks);
    oldTasks.push(obj);
    localStorage.setItem("tasks", JSON.stringify(oldTasks));
  }
}

// AddCard code
addCardbtn.addEventListener("click", function () {
  formSection.classList.remove("hidden");
});
cancelBtn.addEventListener("click", function () {
  formSection.classList.add("hidden");
});

// Form Actions Code
form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  let titleIn = titleInp.value.trim();
  let dateTime = dateTimeinp.value.trim();

  let selected = false;
  categoryRadios.forEach(function (cat) {
    if (cat.checked) {
      selected = cat.value;
    }
  });

  if (titleIn === "") {
    alert("Please Enter the Title");
    return;
  }

  if (dateTime === "") {
    alert("Please Enter Date & Time");
    return;
  }

  if (!selected) {
    alert("please select a category.");
    return;
  }
  saveToLocalStorage({
    titleIn,
    dateTime,
    selected,
  });

  form.reset();
  formSection.classList.add("hidden");
  showCards();
});

function showCards() {
  cardsStack.innerHTML = ""; // clear old cards
  let allTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  allTasks.forEach(function (task) {
    const card = document.createElement("div");
    card.classList.add("card");

    const h4 = document.createElement("h4");
    h4.textContent = task.selected;

    const h1 = document.createElement("h1");
    h1.textContent = task.titleIn;

    const p = document.createElement("p");
    p.textContent = "Due: ";

    const span = document.createElement("span");
    span.textContent = task.dateTime;

    p.appendChild(span);

    card.appendChild(h4);
    card.appendChild(h1);
    card.appendChild(p);

    cardsStack.appendChild(card);
  });

  updateStack(); // apply stacking
}
showCards();

function updateStack() {
  let cards = document.querySelectorAll(".cards-stack .card");

  cards.forEach(function (card, index) {
    if (index > 2) {
      card.style.opacity = "0";
      card.style.pointerEvents = "none";
      return;
    }

    card.style.zIndex = 3 - index;
    card.style.transform = `
      translateX(-6%)
      translateY(${index * -240}px)
      scale(${1 - index * 0.05})
    `;
    card.style.opacity = `${1 - index * 0.1}`;
    card.style.top = `250px`
  });
}

upBtn.addEventListener("click", function () {
  let lastChild = cardsStack.lastElementChild;
  console.log(lastChild);
  if (lastChild) {
    cardsStack.insertBefore(lastChild, cardsStack.firstElementChild);
    //update
    updateStack();
  }
});

downBtn.addEventListener("click", function () {
  let firstChild = cardsStack.firstElementChild;
  if (firstChild) {
    cardsStack.appendChild(firstChild);
    //update
    updateStack();
  }
});
