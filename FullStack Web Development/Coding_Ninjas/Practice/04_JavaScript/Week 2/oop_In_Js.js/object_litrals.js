// const movie = {
//   title: "The Avengers",
//   year: 2012,
//   genre: "Action, Sci-Fi, Thriller",
//   cast: ["Robert Downey Jr. , Chris Evans"],
//   getDetails: function () {
//     console.log(
//       `Title: ${movie.title}\nYear: ${movie.year}\nGenre: ${movie.genre}\nCast: ${movie.cast}`
//     );
//   },

//   getMovieDetails: function (detail) {
//     console.log(movie[detail]);
//   },
// };

// console.log(movie.title);
// movie.getDetails();
// const detail = "year";

// movie.getMovieDetails(detail);

const person = {
  name: "John",
  age: 30,
  occupation: "Engineer",
};

const anotherPerson = person;
anotherPerson.name = "Jane";

console.log(person.name);
