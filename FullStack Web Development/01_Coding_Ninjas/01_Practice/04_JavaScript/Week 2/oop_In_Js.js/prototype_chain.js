function Movie(title) {
  this.title = title;
//   this.getDetails = function () {
//     console.log(`Title: ${this.title}`);
//   };
}

Movie.prototype.getDetails = function(){
    console.log(`Title: ${this.title}`);
};

Movie.prototype.year = 2012;

const movie1 = new Movie("The Avengers");
console.log(movie1);

movie1.year = 2012;

console.log(movie1);
console.log(movie1.__proto__);

const movie2 = new Movie("Avatar");

console.log(movie2);

console.log(movie2.__proto__.__proto__.__proto__);

const car = {
  name: "BMW",
};

console.log(car.__proto__);

let obj = {a:1, b:2};
console.log(Object.getPrototypeOf(obj) === Object.prototype);

function Person(name){
    this.name = name;
}

Person.prototype.age = 30;

const John = new Person("John");

John.__proto__.age = 40;

console.log(John.age);
console.log(Person.prototype.age);
