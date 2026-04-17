// let obj = {
//   name: "harsh",
//   age: 26,
//   khana: "daal chawal",
// };
// obj.age = 22;
// obj["age"] = 22;
// console.log(obj.age);

// Nested Object

// let user = {
//   name: "Akhil",
//   address: {
//     City: "Bbsr",
//     pin: 751019,
//     location: {
//       lat: 24.3,
//       lng: 73.5,
//     },
//   },
// };
// console.log(user.address.location.lng);
// let { lat, lng } = user.address.location;
// console.log(lng, lat);

// for-in
// let obj = {
//   name: "harsh",
//   age: 26,
//   email: "test@test.com",
// };

// for (let key in obj) {
//   console.log(key, obj[key]);
// }

// Object.keys

// let obj = {
//   name: "harsh",
//   age: 26,
//   email: "test@test.com",
// };

// console.log(Object.keys(obj));

// Object.entries()

// let obj = {
//   name: "harsh",
//   age: 26,
//   email: "test@test.com",
// };

// console.log(Object.entries(obj));

// Spread Operator

// let obj21 = {...obj}
// console.log(obj21);

// object.assign

// let obj = {
//   name: "harsh",
//   age: 26,
//   email: "test@test.com",
// };
// let obj2 = Object.assign({ price: 20 }, obj);
// console.log(obj2);

// Deep cloning

// let obj = {
//   name: "Akhil",
//   address: {
//     City: "Bbsr",
//     pin: 751019,
//     location: {
//       lat: 24.3,
//       lng: 73.5,
//     },
//   },
// };

// let obj2 = JSON.parse(JSON.stringify(obj));
// console.log(obj2);

// Optional chaining

// let obj = {
//   name: "Akhil",
//   address: {
//     City: "Bbsr",
//     pin: 751019,
//     location: {
//       lat: 24.3,
//       lng: 73.5,
//     },
//   },
// };

// console.log(obj?.address?.City);

// Computed Properties

// let [role] = "admin";
// let obj = {
//   name: "Akhil",
//   address: {
//     city: "Bbsr",
//     pin: 751019,
//     location: {
//       lat: 24.3,
//       lng: 73.5,
//     },
//     [role]: "Akhil",
//   },
// };
