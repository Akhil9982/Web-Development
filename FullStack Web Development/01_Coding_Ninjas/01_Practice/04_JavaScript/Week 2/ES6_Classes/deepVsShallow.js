const user1 = {
  username: "Sara",
  age: 12,
  marks: {
    science: 78,
    math: 67,
  },
  getmarks() {
    console.log(this.marks);
  },
};

//Deep Copy and Shallow Copy

// const user2 = user1;
// console.log(user2);
// console.log(user1);

// user2.username = "Akhil";
// console.log("After changing user2");
// console.log(user1);
// console.log(user2);

// Shallow Copy

// const user2 = { ...user1 };
// console.log(user2);
// console.log(user1);

// user2.username = "Akhil";
// console.log("After changing user2");
// console.log(user1);
// console.log(user2);

// Object.assign() for Shallow Copy

// const user2 = Object.assign({}, user1);
// console.log(user2);
// console.log(user1);

// user2.username = "Akhil";
// console.log("After changing user2");
// console.log(user1);
// console.log(user2);
// user2.username = "Ak";
// console.log("After changing user2 marks");
// console.log(user1);
// console.log(user2);

// Deep Copy
const user2 = JSON.parse(JSON.stringify(user1));
user2.marks.science = 88;
console.log("After changing user2");
console.log(user2);
console.log(user1);
