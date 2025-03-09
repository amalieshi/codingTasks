// Create a program that takes a number as input and swaps the second and last digits of the number.

// Function to swap the second and last digits of a number
function swapDigits(number) {
  // Convert input to an array
  let inputArray = number.split("");

  // Get the length of the array
  let length = inputArray.length;

  // Swap the second and last digits
  let temp = inputArray[1];
  inputArray[1] = inputArray[length - 1];
  inputArray[length - 1] = temp;

  // Convert the array back to a string
  let output = inputArray.join("");

  return output;
}

// Get user input
let input = prompt("Enter a number of at least three digits: ");
console.log("The original number is: " + input);
// Validate input
let validInput = /^[0-9]{3,}$/.test(input); // Check that the inputs are at least three numerical digits.

if (!validInput) {
  console.log("Invalid input. Please enter a number of at least three numerical digits.");
} else {
  // Output the result
  let output = swapDigits(input);
  console.log("The swapped number is: " + output);
}


