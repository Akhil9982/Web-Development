/* Array Methods in JS (Dynamic) */

const cities = ["Mumbai", "Delhi", "Calcutta", "jaipur", "chennai"];

console.log(cities.length);
cities[2] = "Kolkata";
console.log(cities);

/* Methods on Arrays */

/* Adding an Element */
//push()

const teams = ["CSK", "RCB", "MI", "LSG"];
console.log(teams.length);
const pushedArray = teams.push("GT");
console.log(pushedArray);
console.log(teams);
console.log(teams.length);

// unshift
teams.unshift("KKR");
console.log(pushedArray);
console.log(teams);
console.log(teams.length);

/** Removing an element */
//pop
teams.pop();
teams.pop();
console.log(pushedArray);
console.log(teams);
console.log(teams.length);
//shift()

teams.shift();
console.log(pushedArray);
console.log(teams);
console.log(teams.length);

/** Check the element is present or not */
// indexOf()
const RCBIndex = teams.indexOf("RCB");
console.log(RCBIndex);
const gtIndex = teams.indexOf("GT");
console.log(gtIndex);

// includes()
const RcbIncludes = teams.includes("RCB");
console.log(RcbIncludes);

const GTIncludes = teams.includes("GT");
console.log(GTIncludes);

// slice()
console.log(teams);
console.log(teams.slice(-1));
console.log(teams);

// splice()
teams.splice(2, 1, "GT", "LSG");
console.log(teams);

// concat()

const team2 = ["India", "Australia", "New Zealand"];
const mergedTeams = teams.concat(team2);
console.log(mergedTeams);
