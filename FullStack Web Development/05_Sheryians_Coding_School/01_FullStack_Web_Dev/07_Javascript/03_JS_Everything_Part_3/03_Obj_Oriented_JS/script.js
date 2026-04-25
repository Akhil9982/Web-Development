// constructor Functions

// function CreatePencil(name, price, color, company) {
//   this.name = name;
//   this.price = price;
//   this.color = color;
//   this.company = company;
//   this.write = function (text) {
//     let h1 = document.createElement("h1");
//     h1.textContent = text;
//     h1.style.color = color;
//     document.body.append(h1);
//   };
// }

// let pencil1 = new CreatePencil("natraj", 10, "blue", "natraj");
// console.log(pencil1.write("Hi Hello"));

// let pencil2 = new CreatePencil("Doms", 20, "red", "apsara");
// console.log(pencil2.write("Hi There"));

// Prototypes

// function CreatePencil(name, price, color, company) {
//   this.name = name;
//   this.price = price;
//   this.color = color;
//   this.company = company;
// }

// CreatePencil.prototype.write = function (text) {
//   let h1 = document.createElement("h1");
//   h1.textContent = text;
//   h1.style.color = this.color;
//   document.body.append(h1);
//   return "done";
// };
// let pencil1 = new CreatePencil("natraj", 10, "blue", "natraj");

// let pencil2 = new CreatePencil("Doms", 20, "red", "apsara");

// class
// constructor and methods
// class CreatePencil {
//   constructor(name, price, company, color) {
//     this.name = name;
//     this.price = price;
//     this.company = company;
//     this.color = color;
//   }
//   erase() {
//     document.body.querySelectorAll("h1").forEach((elem) => {
//       if (elem.style.color === this.color) {
//         elem.remove();
//       }
//     });
//     return "done";
//   }

//   write(text) {
//     let h1 = document.createElement("h1");
//     h1.textContent = text;
//     h1.style.color = this.color;
//     document.body.appendChild(h1);
//     return "done";
//   }
// }

// let p1 = new CreatePencil("Akhil", 10, "apsara", "red");
// let p2 = new CreatePencil("sirisha", 10, "natraj", "blue");

// ES6 Classes: extends,super

// class User {
//   constructor(name, address, username, email, role) {
//     this.name = name;
//     this.address = address;
//     this.username = username;
//     this.email = email;
//     this.role = "user";
//   }

//   checkRole() {
//     return `You are a ${this.role}`;
//   }

//   write(text) {
//     let h1 = document.createElement("h1");
//     h1.textContent = `${this.name}: ${text}`;
//     document.body.appendChild(h1);
//     return "done";
//   }
// }

// clasical inheritence

// class Admin extends User {
//   constructor(name, address, username, email) {
//     super(name, address, username, email);
//     this.role = "admin";
//   }

//   remove() {
//     document.querySelectorAll("h1").forEach(function (elem) {
//       elem.remove();
//     });
//   }
// }

// let u1 = new User("Akhil", "Odisha", "hey23", "hey@akhil.com");
// let u2 = new User("Akhil2", "Odisha2", "hey232", "hey@akhil.com2");
// let a1 = new Admin("admin1", "india", "adminstrator", "a@admin.com");

// Prototypal Inheritance

// let coffee = {
//   color: "dark",
//   drink: function () {
//     console.log("Akhil");
//   },
// };

// let ArabiaCoffee = Object.create(coffee);
// console.log(ArabiaCoffee);

// ArabiaCoffee.taste = "bitter";
// ArabiaCoffee.drink();

// let a = {
//   name: "Akhil",
//   role: "Dev",
// };
// let b = Object.create(a);
// console.log(b);
