let refreshBtn = document.querySelector("#refreshBtn");
let users = document.querySelector(".users");

function getUsers() {
  fetch("https://randomuser.me/api/?results=3")
    .then((raw) => raw.json())
    .then((data) => {
      users.innerHTML = "";
      data.results.forEach((user) => {
        const card = document.createElement("div");
        card.className =
          "flex w-full max-w-sm items-center gap-4 rounded-xl bg-[#1e293b] p-6 shadow-lg";

        const img = document.createElement("img");
        img.className =
          "h-16 w-16 rounded-full border-2 border-slate-700 object-cover";
        img.src = user.picture.large;
        img.alt = user.name.first;

        const content = document.createElement("div");
        content.className = "flex flex-col gap-1";

        const name = document.createElement("h3");
        name.className = "text-xl font-bold text-white";
        name.textContent = user.name.first + " " + user.name.last;

        const email = document.createElement("p");
        email.className = "text-sm text-slate-400";
        email.textContent = user.email;

        const statusWrapper = document.createElement("div");
        statusWrapper.className = "mt-2";

        const status = document.createElement("span");
        status.className =
          "rounded-full bg-indigo-600/30 px-3 py-1 text-xs font-semibold text-indigo-400 border border-indigo-500/20";
        status.textContent = "Active";

        statusWrapper.appendChild(status);
        content.appendChild(name);
        content.appendChild(email);
        content.appendChild(statusWrapper);

        card.appendChild(img);
        card.appendChild(content);

        users.appendChild(card);
      });
    });
}

getUsers();

refreshBtn.addEventListener("click", function () {
  getUsers();
});
