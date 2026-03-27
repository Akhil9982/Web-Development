// 1. Import readline

const readline = require("readline");

// 2. Configure interface to connect with commandline / terminal

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Reading Values
r1.question("Enter First Number ", (num1) => {
  r1.question("Enter second Number ", (num2) => {
    // num1, num2
    const sum = Number(num1) + Number(num2);
    console.log(sum);
    r1.close();
  });
});
