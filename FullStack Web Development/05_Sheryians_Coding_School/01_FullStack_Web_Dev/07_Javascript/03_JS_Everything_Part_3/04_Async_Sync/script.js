// function abcd(fnc) {
//   setTimeout(fnc, Math.floor(Math.random() * 10) * 1000);
// }

// abcd(function () {
//   console.log("hey");
// });
// console.log(Math.floor(Math.random() * 10));

// Callback Hell

// function profileLekarAao(username, cb) {
//   console.log("Fetching Profile data");
//   setTimeout(() => {
//     cb({ id: 1234, username, age: 26, email: "huihui@hui.com" });
//   }, 2000);
// }

// function sarePostLekarAao(id, cb) {
//   console.log("fetching all posts");

//   setTimeout(() => {
//     cb({ _id: id, posts: ["hey", "hello", "goodmorning"] });
//   }, 3000);
// }

// function savedPostsNikalo(id, cb) {
//   console.log("fetching savedPosts");

//   setTimeout(() => {
//     cb({ _id: id, saved: [1, 2, 3, 4, 44, 553] });
//   }, 3000);
// }

// profileLekarAao("Akhil", function (data) {
//   console.log(data);

//   (sarePostLekarAao(data._id, function (posts) {
//     console.log(posts);
//   }),
//     savedPostsNikalo(data.id, function (saved) {
//       console.log(saved);
//       ...
//     }));
// });

// Promises

// let pr = new Promise(function (res, rej) {
//   setTimeout(() => {
//     let rn = Math.floor(Math.random() * 10);
//     if (rn > 5) res("resolved with " + rn);
//     else rej("rejected wuth " + rn);
//   }, 3000);
// });

// pr.then(function (val) {
//   console.log(val);
// }).catch(function (val) {
//   console.log(val);
// });

// Async Await

// let pr = new Promise(function (res, rej) {
//   setTimeout(() => {
//     let rn = Math.floor(Math.random() * 10);
//     if (rn > 5) res("resolved with " + rn);
//     else rej("rejected wuth " + rn);
//   }, 1000);
// });

// async function abcd() {
//   try {
//     let val = await pr;
//     console.log(val);
//   } catch (err) {
//     console.log(err);
//   }
// }

// abcd();


