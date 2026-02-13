// Email Verification
// Input an email
// Length of the email > 11
// after '.' only 2 or 3 characters allowed
// minimum 3 characters between "@" and ".".

// const email = prompt("Enter the Email address");
// const emailLen = email.length;
// const dotIndex = email.lastIndexOf(".");
// const atIndex = email.lastIndexOf("@");
// const lastIndex = emailLen - 1;
// if (
//   emailLen < 11 ||
//   lastIndex - dotIndex < 2 ||
//   lastIndex - dotIndex > 3 ||
//   dotIndex - atIndex < 3
// ) {
//   console.log("Invalid Email");
// } else {
//   console.log("Email is Valid");
// }

// function main(email) {
//   let result;
//   let email = prompt("Enter Email Address");
//   let atindex = email.indexOf("@");
//   let dotindex = email.lastIndexOf(".");
//   let len = email.length;
//   if (atindex >= 3 && dotindex - atindex >= 4 && len - dotindex - 1 >= 2) {
//     result = "Welcome " + email + " to our site";
//     console.log(result);
//   } else {
//     result = "invalid email";
//   }
//   return result;
// }

// Step 1: Find the index of "@" in the email

// Step 2: Find the index of the last dot "." in the email

// Step 3: Calculate the length of the email

// Step 4: Validate the email
// Check if there are at least 3 characters before the "@" symbol
// Ensure there is a dot "." at least 4 characters after "@"
// Make sure there are at least 2 characters after the last dot "."

// If all conditions are met, assign a welcome message with email name to result
// If any condition fails, assign "invalid email" to result

function main(email) {
  let result;
  const atIndex = email.indexOf("@");
  const dotIndex = email.lastIndexOf(".");

  if (
    atIndex >= 3 && // at least 3 characters before "@"
    dotIndex !== -1 && // "." exists
    dotIndex > atIndex && // "." comes after "@"
    dotIndex - atIndex >= 4 && // "." is at least 4 chars after "@"
    email.length - dotIndex > 2 // at least 2 chars after last "."
  ) {
    return `Welcome ${email} to our site`;
  }

  return "invalid email";
}
