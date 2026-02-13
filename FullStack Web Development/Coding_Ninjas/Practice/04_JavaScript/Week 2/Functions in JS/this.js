"use strict";

console.log(this);

function checkThis() {
  console.log(this);
}

checkThis();

const checkArrow = () => {
  console.log(this);
};

checkArrow();
// const user1 = {
//   userName: "John",
//   userAge: 12,

//   work: function () {
//     console.log(this);
//   },
// };
// user1.work();

// const user2 = {
//   userName: "Harry",
// };

// user2.work = user1.work;

// // console.log(user2);

// user2.work();


// Do not alter the starter code

const orders = [
  {
    orderNumber: 1,
    items: [
      { name: "Cappuccino", price: 3.5 },
      { name: "Chocolate Croissant", price: 2.5 }
    ]
  },
  {
    orderNumber: 2,
    items: [
      { name: "Latte", price: 4.0 },
      { name: "Blueberry Muffin", price: 2.75 }
    ],
    discountCode: "COFFEELOVER"
  },
  { // Added a TEALOVER order for complete testing
    orderNumber: 3,
    items: [
      { name: "Chai Tea", price: 3.0 },
      { name: "Almond Biscotti", price: 2.0 }
    ],
    discountCode: "TEALOVER"
  }
];

// Below is the callback function to calculate the discount
const applyDiscount = (discountCode, total) => {
  let discountRate = 0;

  // Implement discount logic here
  switch (discountCode) {
    case "COFFEELOVER":
      discountRate = 0.10; // 10%
      break;
    case "TEALOVER":
      discountRate = 0.20; // 20%
      break;
    default:
      discountRate = 0; // No discount
  }

  // Return the total value after discount
  return total * (1 - discountRate);
};

// Function to calculate the total value of all orders
// Apply discounts if applicable
function totalOrderValue(orders, applyDiscount) {
  // 1. Use map to calculate the discounted total for EACH order
  const discountedOrderTotals = orders.map(order => {
    // Calculate the base total value of the current order using reduce
    const baseTotal = order.items.reduce((acc, item) => acc + item.price, 0);

    // Apply the discount using the provided callback function
    const finalTotal = applyDiscount(order.discountCode, baseTotal);

    return finalTotal;
  });

  // 2. Use reduce to sum up all the discounted totals into a single grand total
  const grandTotal = discountedOrderTotals.reduce((acc, currentTotal) => acc + currentTotal, 0);

  // 3. Return the final grand total rounded to 2 decimal places
  return grandTotal.toFixed(2);
}


// Example Usage & Verification:
const finalTotal = totalOrderValue(orders, applyDiscount);

/*
Expected Calculation:
Order 1: $3.50 + $2.50 = $6.00 (No Discount)
Order 2: $4.00 + $2.75 = $6.75 * 0.90 = $6.075
Order 3: $3.00 + $2.00 = $5.00 * 0.80 = $4.00
Grand Total: $6.00 + $6.075 + $4.00 = $16.075
Result (toFixed(2)): 16.08
*/

console.log(`The total order value is: $${finalTotal}`); // Output: The total order value is: $16.08
