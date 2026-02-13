const today = new Date();
console.log(today);
const birthDate = new Date("1997-02-24");
console.log(birthDate);

const someDay = new Date(1997, 1, 24);

console.log(someDay);

birthDate.getFullYear();
console.log(typeof birthDate.getFullYear());

console.log(birthDate.toDateString());

const bithStr = birthDate.toDateString();
console.log(bithStr.slice(11, 20));

