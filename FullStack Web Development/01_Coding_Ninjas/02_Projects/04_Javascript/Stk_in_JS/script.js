// const API_URL =
//   "https://stock-market-api-k9vl.onrender.com/api/profiledata";

// // Cache DOM elements (avoid repeated lookups)
// const companyNameEl = document.getElementById("company-name");
// const profitEl = document.getElementById("Profit");
// const valueEl = document.getElementById("Value");
// const summaryEl = document.querySelector(".stock-description p");
// const stockItems = document.querySelectorAll(".stock-item");

// // Cache API data to avoid refetching
// let stockCache = null;

// /* -------------------------------
//    Fetch + cache stock data once
// -------------------------------- */
// async function fetchStockData() {
//   if (stockCache) return stockCache;

//   try {
//     const response = await fetch(API_URL);
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const result = await response.json();
//     stockCache = result.stocksProfileData[0];
//     return stockCache;
//   } catch (error) {
//     console.error("Failed to fetch stock profile data:", error);
//     return null;
//   }
// }

// /* -------------------------------
//    Update UI
// -------------------------------- */
// function updateStockUI(stockData) {
//   if (!stockData) return;

//   summaryEl.textContent = stockData.summary ?? "No summary available.";
// }

// /* -------------------------------
//    Handle stock click
// -------------------------------- */
// async function handleStockClick(item) {
//   const ticker = item.querySelector(".ticker")?.textContent.trim();
//   if (!ticker) return;

//   const data = await fetchStockData();
//   const stockData = data?.[ticker];

//   if (!stockData) {
//     console.warn(`No data found for ${ticker}`);
//     return;
//   }

//   updateStockUI(stockData);
//   setActiveItem(item);
// }

// /* -------------------------------
//    Active state handler
// -------------------------------- */
// function setActiveItem(activeItem) {
//   stockItems.forEach((el) => el.classList.remove("active"));
//   activeItem.classList.add("active");
// }

// /* -------------------------------
//    Event listeners
// -------------------------------- */
// stockItems.forEach((item) => {
//   item.addEventListener("click", () => handleStockClick(item));
// });
