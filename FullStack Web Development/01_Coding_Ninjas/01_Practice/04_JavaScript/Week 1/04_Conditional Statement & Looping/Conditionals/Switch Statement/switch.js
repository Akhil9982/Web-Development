//  Switch Statement

// Simulate a traffic light using switch

// let color = String(prompt("Enter the color"));

// switch (color) {
//   case "red":
//     console.log("STOP! the color is red.");
//     break;

//   case "yellow":
//     console.log("CAUTION the light is yellow");
//     break;

//   case "green":
//     console.log("GO Ahead!");
//     break;

//   default:
//     console.log("Invalid Color");
// }

let coffeeType = String(prompt("Enter the coffee name"));

function coffeeMachine(coffeeType) {
  let answer;

  // Convert the input coffee type to lowercase using the toLowerCase() method.
  // let inputCoffeeType = String(prompt("Enter the coffee name"));

  coffeeType = coffeeType.toLowerCase();

  switch (coffeeType) {
    case "regular":
      answer = "$2.50";
      break;
    case "latte":
      answer = "$3.50";
      break;
    case "cappuccino":
      answer = "$4.00";
      break;
    case "espresso":
      answer = "$2.50";
      break;
    default:
      answer = "Invalid Coffee type";
  }
  // Use a switch statement to handle different coffee types and store the price in 'answer'.
  // Example:
  // case "regular":
  //     answer = "$2.50";
  //     break;

  // Add a default case to handle any invalid coffee types.

  return answer;
}
