let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");
let toggle = document.querySelector("#togglePassword");

toggle.addEventListener("click", () => {
  password.type = password.type === "password" ? "text" : "password";

  toggle.innerHTML =
    password.type === "password"
      ? '<i class="fa-regular fa-eye"></i>'
      : '<i class="fa-regular fa-eye-slash"></i>';
});

form.addEventListener("submit", function (dets) {
  dets.preventDefault();

  document.querySelector("#emailError").textContent = "";
  document.querySelector("#passwordError").textContent = "";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  let emailans = emailRegex.test(email.value);
  let passwordans = passwordRegex.test(password.value);
  let isValid = true;
  if (!emailans) {
    document.querySelector("#emailError").textContent = "Email is incorrect";
    document.querySelector("#emailError").style.display = "initial";
    isValid = false;
  }

  if (!passwordans) {
    document.querySelector("#passwordError").textContent =
      "Password is incorrect";
    document.querySelector("#passwordError").style.display = "initial";
    isValid = false;
  }

  if (isValid) {
    document.querySelector("#resultMessage").textContent = "Sucessful!";
  }
});
