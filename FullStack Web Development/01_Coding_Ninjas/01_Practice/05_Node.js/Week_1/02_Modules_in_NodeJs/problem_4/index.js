// Import required module
const readline = require("readline");
const Solution = () => {
  // Write your code here
  const qInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  qInterface.question("Enter the first number ", (num1) => {
    qInterface.question("Enter the second number ", (num2) => {
      const maxNumber = Math.max(Number(num1), Number(num2));
      console.log(maxNumber);
      qInterface.close();
    });
  });
};

Solution();
module.exports = Solution;
