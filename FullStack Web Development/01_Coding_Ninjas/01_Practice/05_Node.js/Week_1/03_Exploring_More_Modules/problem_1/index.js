const characters = [
  { name: "danerys", age: 23 },
  { name: "sansa", age: 21 },
  { name: "arya", age: 16 },
];

let ans = Number.MAX_VALUE;
characters.forEach((character) => {
  if (character.age < ans) ans = character.age;
});

console.log(ans);
