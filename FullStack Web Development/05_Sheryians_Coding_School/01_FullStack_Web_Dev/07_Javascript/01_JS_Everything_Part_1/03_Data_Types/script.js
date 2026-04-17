/* Primitive data Types:  These data types can be a copy of a parent
strings, number, boolean, null, undefined, symbol, bigint

Reference: These are just a reference copy of a parent
{}, [], ()


strings, number, boolean, null, undefined, symbol, bigint
arrays, objects,functions

Strings
"" - double Quotes
'' - single Quotes
`` - backticks

Example: "Akhil" - String

Number
12 - integer - number
12.5 - floating integer - number

Boolean
True or false

null - No value

let studentData = null; This value can be changed later to "Akhil" which is a string.

undefined - There is no value is been assigned/initialized but the variable is declared

Example: let a;

Symbol:
unique immutable value


let obj = {
  uid: 1,
  name: "harsh",
  age: 12,
  email: "test@test.com",
};

let u1 = Symbol("uid");
obj[u1] = "001";

BigInt


let a = 9007199254740991n;
a + 3n;

Reference Values
arrays, objects,functions

Dynamic typing -> dynamic typing

Typeof quirks (e.g., typeof null === "object")

Type Coercion (== vs ===)
Truthy vs falsy values



*/

