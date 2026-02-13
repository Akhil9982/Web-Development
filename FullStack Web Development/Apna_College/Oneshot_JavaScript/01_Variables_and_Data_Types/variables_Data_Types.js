// const student = {
//   fullName: 'Rahul Kumar',
//   age: 20,
//   cgpa: 8.2,
//   isPass: true,
// };
// student.fullName = 'Akhil';
// student.age = 29;
// student.cgpa = 8.222;
// student.isPass = false;

// console.log(student);

// let a = 25;
// a = 10;
// console.log(a);
// student['age'] = student["age"] + 1;
// console.log(student['age']);

/** ************* Practice Questions ******************* */
/**
 * Q1. Create a const obj called product to store information shown in Picture.
 */

const product = {
  type: "Stationary",
  name: "Parker Jotter Standard CT Ball Pen (Black)",
  rating: 4,
  price: 270,
  MRP: 285,
  offer: 5,
};

console.log(product);

/**
 * Q2. Create a const obj called profile to store information shown in Picture.
 */

const profile = {
  userName: "@shradhakhapra",
  profileName: "Shradha Khapra",
  numPost: 195,
  numFollowers: 569,
  numfollowing: 4,
  isFollow: true,
  profileDesc: "Apna College | Ex-Microsoft, DRDO",
};

console.log(profile);

console.log(typeof profile["numFollowers"]);
