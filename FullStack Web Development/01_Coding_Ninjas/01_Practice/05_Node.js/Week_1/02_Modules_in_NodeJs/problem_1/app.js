// Note:  Please do not change the pre-written code

// import the required module here
const arithmeticModule = require("./math");
const Solution = () => {
  const nums = [1, 2, 3, 4, 5];
  // write your code here to Display the results of the calculations on the console.
  const sum = arithmeticModule.sum(nums);
  const mean = arithmeticModule.mean(nums);

  console.log(`The Sum is ${sum}`);
  console.log(`The mean is ${mean}`);
};
Solution();
module.exports = Solution;
