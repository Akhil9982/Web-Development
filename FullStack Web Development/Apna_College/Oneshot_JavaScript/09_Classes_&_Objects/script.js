const student = {
  fullName: "Akhil",
  marks: 94.4,
  printMarks: function () {
    console.log("marks = ", this.marks);
  },
};

// Practice Questions

// Qs. You are creating a website for your college. Create a class User with 2 properties, name & email. It also has a method called viewData() that allows user to view websie data.

let DATA = "secrete info";

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log("data = ", DATA);
  }
}

let student1 = new User("Akhil", "abc@fake.com");
let student2 = new User("Akhil1", "abc@fake.com");

let teacher1 = new User("Dean", "dean@college.com");

// Qs. Crate a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data.

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  editData(newData) {
    DATA = "some new value";
  }
}

let admin1 = new Admin("admin", "admin@college.com");
