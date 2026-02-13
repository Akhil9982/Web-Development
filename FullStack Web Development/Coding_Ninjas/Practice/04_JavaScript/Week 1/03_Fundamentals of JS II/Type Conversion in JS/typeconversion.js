// Type Conversion

/* *** Convert To String *** */
// String();

console.log(String(100)); //This is a number converted to String
console.log(100); // This is a number
console.log(String(true));
console.log(String(null));
console.log(String(undefined));

// toString();

console.log((123).toString());
// console.log((null).toString());
// console.log((undefined).toString());

/* Convert To Number */
// Number();

console.log("***NUMBER****");

console.log(Number("25"));
console.log(Number("value"));
console.log(Number(true));
console.log(Number(false));

// Unary + Operator --- works on Variables

// let a = '123';
// console.log(+a);

// let a = "123akhil";
// console.log(+a);

// parsefloat();

console.log(parseFloat("123.45f"));

// parseInt();
console.log(parseInt("123.45f"));

/* *** Convert To Boolean */
// Boolean();

console.log(Boolean(0));

console.log(Boolean("gg"));

console.log(Boolean(undefined));

// let x = "5";
// let y = 2;

// let result = x * y;

// console.log(result === 10);

let a = 8;
let b = 3;
let c = 5;

let result = a % b === 0 && c > b;

console.log(result);

//Convert the type to numbers
//Calculate the discountedprice
function shoppingDiscountCalculator(originalValue, discountPercentage) {
  let answer;
  originalValue_conv = parseFloat(originalValue);
  discountPercentage_conv = parseFloat(discountPercentage);
  discount_price = (originalValue_conv * discountPercentage_conv) / 100;
  answer = originalValue - discount_price;
  return answer;
}

function temperatureInCelcius(temperatureInCelsius) {
  // Convert the temperature from Celsius to Fahrenheit
  let fahrenheit;
  temperatureValueInCelsius = (temperatureInCelsius * 9) / 5 + 32;
  // Check if the Fahrenheit value is greater than 86
  let isHot;
  isHot = temperatureValueInCelsius > 86;
  return isHot;
}
