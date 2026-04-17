// Create an object for a student with name, age, and isEnrolled.

// let student = {
//   name: "Akhil",
//   age: 28,
//   isEnrolled: true,
// };
// console.log(student["isEnrolled"]);

// Can an object key be a number or boolean ?

// obj = {
//   true: "yes",
//   42: "answer",
// };
// console.log(obj[true]);

// Access the value of "first-name" from this object:

// const user = {
//   "first-name": "Akhil",
// };

// console.log(user["first-name"]);

// Given a dynamic key let key = "age", how will you access user[key]?

// let key = "age";
// const user = {
//   age: 28,
// };
// user[key];

// From the object below , print the latitude:

// const userlocation = {
//   city: "bbsr",
//   coordinatess: {
//     lat: 23.2,
//     lng: 77.4,
//   },
// };

// console.log(userlocation.coordinates.lat);

// What will happen if coordinates is missing in the above objects? How can you prevent errors?

// console.log(userlocation?.coordinates?.lat);

// Destructure the city and lat from the location object above.

// let { city } = userlocation;
// let { lat } = userlocation.coordinatess;
// let { lng } = userlocation.coordinatess;
// console.log(lat, city);

// Destructure the key "first-name" as a variable called firstName.

// let student = {
//   "user-Name": "Akhil",
// };
// let { "user-Name": userName } = student;

// console.log(userName);

// Use for-in loop to log all keys in this object:

// let course = {
//   title: "JavaScript",
//   duration: "4 weeks",
// };

// for (let key in course) {
//   console.log(key, course[key]);
// }

// Use Object.entries() to print all key-value pairs as:
// title: "JavaScript",
//   duration: "4 weeks",

// let course = {
//   title: "JavaScript",
//   duration: "4 weeks",
// };

// Object.entries(course).forEach(function (val) {
//   console.log(val[0] + ": " + val[1]);
// });

// Copy this object using spread(...) operator.

// const original = { a: 1, b: 2 };

// let obj1 = { ...original };
// console.log(obj1);

// const obj1 = { info: {score:80}};
// const clone = {...obj1};
// clone.info.score = 100;
// console.log(obj1.info.score); // 100

// do a deepclone for above obj1

// const obj1 = { info: { score: 80 } };
// const clone = JSON.parse(JSON.stringify(obj1));
// clone.info.score = 100;
// console.log(obj1);
// console.log(clone);

// Rewrite this safely using optional chaining

// const person = {};
// console.log(person.profile.name);
// console.log(person?.profile?.name); //undefined

// Use a variable to dynamically assign a property

// const key = "role";
// let user = {
//   name: "Akhil",
//   [key]: "admin",
// };
// console.log(user);
