// IIFE (Immediately Invoked Function Expression)

(function (a, b) {
  console.log(a ** b);
})(4, 2);

const user = (function () {
  const userData = {
    userName: 'John',
    userAge: 20,
  };

  function getName() {
    console.log(userData.userName);
  }

  function updateAge(age) {
    console.log(userData.userAge + age);
  }

  return { getName, updateAge };
})();