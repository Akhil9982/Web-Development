let form = document.querySelector("form");
let userName = document.querySelector("#name");
let bio = document.querySelector("#bio");
let role = document.querySelector("#role");
let photoUrl = document.querySelector("#photoUrl");
let cardsContainer = document.querySelector("#cardsContainer");
const userManager = {
  users: [],
  init: function () {
    form.addEventListener("submit", this.submitForm.bind(this));
    cardsContainer.addEventListener("click", this.removeUser.bind(this));
  },
  submitForm: function (e) {
    e.preventDefault();
    this.addUser();
  },
  addUser: function () {
    this.users.push({
      userName: userName.value,
      bio: bio.value,
      role: role.value,
      photoUrl: photoUrl.value,
      uniqueId: crypto.randomUUID(),
    });
    form.reset();
    this.renderUI();
  },
  renderUI: function () {
    document.querySelector(".users").innerHTML = "";
    this.users.forEach(function (user) {
      const card = document.createElement("div");
      card.className =
        "bg-neutral-900 border border-neutral-800 rounded-2xl p-8 w-[280px] flex flex-col items-center text-center shadow-lg newcard";
      card.dataset.id = user.uniqueId;

      // img
      const img = document.createElement("img");
      img.src = user.photoUrl;
      img.alt = user.userName;
      img.className =
        "w-20 h-20 rounded-full border-4 border-neutral-600 object-cover mb-4";

      // h3
      const name = document.createElement("h3");
      name.className = "text-lg font-bold mb-1";
      name.textContent = user.userName;

      // role
      const role = document.createElement("p");
      role.className = "text-xs font-semibold text-neutral-400 mb-4";
      role.textContent = user.role;

      // description
      const desc = document.createElement("p");
      desc.className = "text-xs text-neutral-300 leading-relaxed";
      desc.textContent = user.bio;

      // append everything
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(role);
      card.appendChild(desc);

      // finally attach to DOM
      document.querySelector(".users").appendChild(card);
    });
  },
  removeUser: function (evt) {
    const card = evt.target.closest(".newcard");
    if (!card || !card.dataset.id) return;
    const id = card.dataset.id;
    const deletedUser = this.users.find((user) => user.uniqueId === id);
    this.users = this.users.filter((user) => user.uniqueId !== id);
    this.showToast(`${deletedUser.userName} deleted`);
    this.renderUI();
  },
  showToast: function (message) {
    const toast = document.createElement("div");
    toast.textContent = message;

    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.left = "50%";
    toast.style.transform = "translateX(-50%)";
    toast.style.background = "#111";
    toast.style.color = "#fff";
    toast.style.padding = "10px 20px";
    toast.style.borderRadius = "8px";
    toast.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
    toast.style.zIndex = "1000";
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.3s ease";

    document.body.appendChild(toast);

    // trigger fade-in
    setTimeout(() => {
      toast.style.opacity = "1";
    }, 10);

    // remove after 3s
    setTimeout(() => {
      toast.style.opacity = "0";
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 3000);
  },
};
userManager.init();
