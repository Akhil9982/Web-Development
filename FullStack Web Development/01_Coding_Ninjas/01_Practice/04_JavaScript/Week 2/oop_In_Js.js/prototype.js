function Movie(title) {
  this.title = title;
}
const movie1 = new Movie("The Avengers");
console.log(movie1);

movie1.year = 2012;

console.log(movie1);
console.log(movie1.__proto__);

const movie2 = new Movie("Avatar");

console.log(movie2);

console.log(movie2.__proto__.__proto__.__proto__);



function Game(name, platform) {
  this.name = name;
  this.platform = platform;
}

const fifa = new Game("FIFA 23", "PlayStation");
console.log(fifa.__proto__ === Game.prototype);
console.log(fifa.__proto__.__proto__ === Object.prototype);


function Galaxy(name) {
  this.name = name;
}
const milkyWay = new Galaxy("Milky Way");
console.log(milkyWay.__proto__.__proto__.__proto__);