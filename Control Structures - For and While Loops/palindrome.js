// Write a program that checks if a word is a palindrome. A palindrome is a word that is spelled the same forwards and backwards.

// Function to check if a word is a palindrome
function isPalindrome(word) {
  // Convert input to an array
  let inputArray = word.split("");

  // Get the length of the array
  let length = inputArray.length;

  // Initialize variables
  let isPalindrome = true;
  let i = 0;

  // Use While loop to check if the word is a palindrome
  while (i <= length) {
    // Check if the first and last characters are the same
    if (inputArray[i] != inputArray[length - 1 - i]) {
      isPalindrome = false; // If they are not the same, the word is not a palindrome
      break;
    }
    i++;
  }

  return isPalindrome;
}

// Get user input
let input = prompt("Enter a word: ");

// Validate input
let validInput = /^[a-zA-Z]+$/.test(input);

if (!validInput) {
  console.log("Invalid input. Please enter a word containing only alphabetic characters.");
} else {
  // Output the result
  if (isPalindrome(input)) {
    console.log("The word " + input + " is a palindrome.");
  } else {
    console.log("The word " + input + " is not a palindrome.");
  }
}