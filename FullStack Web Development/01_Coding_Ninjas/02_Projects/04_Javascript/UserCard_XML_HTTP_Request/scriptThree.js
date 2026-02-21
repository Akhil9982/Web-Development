const divEle = document.querySelector(".card-container");

async function getDetails(id) {
  try {
    if (id <= 1) throw new Error("No previous user exists");

    const response = await fetch(`https://dummyjson.com/users/${id}`);

    if (!response.ok) {
      throw new Error("No Data present");
    }

    const userdata = await response.json();
    displayUser(userdata, "beforeend");

    const response2 = await fetch(`https://dummyjson.com/users/${id - 1}`);

    const userdata2 = await response2.json();
    displayUser(userdata2, "beforeend");

    const response3 = await fetch(`https://dummyjson.com/users/${id - 2}`);

    const userdata3 = await response3.json();
    displayUser(userdata3, "beforeend");
  } catch (err) {
    console.log(err);
  }
}

function displayUser(data, pos, className = "") {
  const card = `<div class="user-card ${className}">
            <img src="${data.image}" alt="Profile Image">
            <h3>${data.firstName}</h3>
            <h3>${data.lastName}</h3>
            <p class="email">${data.email}</p>
            <button class="btn">View Profile</button>
        </div>`;

  divEle.insertAdjacentHTML(pos, card);
}

getDetails(3);
