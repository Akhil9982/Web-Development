/** String Traversal */

/** let str = 'JavaScript is an amazing language.';
 * 
 * for (let i = 0; i< str.length; i++){
 * console.log(str.charAt(i));
 * }
 */

function countChars(str, ch) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === ch) {
      count++;
    }
  }
  console.log(`Occurrences of character ${ch} is: ${count}`);
}

let str = "JavaScript is an amazing language.";
let charToFind = 'i';
countChars(str, charToFind);


function countWords(str) {
  // Remove leading/trailing spaces, then split by spaces
  let words = str.trim().split(/\s+/);

  // If the string is empty, return 0
  return str.trim() === "" ? 0 : words.length;
}

console.log(countWords("Hello World"));

