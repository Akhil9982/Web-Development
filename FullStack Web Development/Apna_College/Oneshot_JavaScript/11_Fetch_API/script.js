// const URL = "https://dogapi.dog/api/v2/breeds";

// let promise = fetch(URL);
// console.log(promise);

// const getBreeds = async () => {
//   console.log("getting data .....");
//   let response = await fetch(URL);
//   console.log(response);
//   let data = await response.json();
//   console.log(data);
//   // Display breed names
//   data.data.forEach((breed) => {
//     console.log("🐾", breed.attributes.name);
//     console.log("🐾", breed.attributes.description);
//   });
// };

const URL = "https://potterapi-fedeperin.vercel.app/en/books";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn")

let h_books = fetch(URL);
console.log(h_books);

const getBooks = async () => {
  console.log("getting the data.....");
  let res = await fetch(URL);
  console.log(res);
  let data = await res.json();
  factPara.innerText = data[4].description;
};

btn.addEventListener("click", getBooks);

