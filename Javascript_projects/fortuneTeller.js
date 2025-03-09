let motherFirstName = prompt("What is your mother's first name?");
let street = prompt("What is the street you grew up on?");
let favoriteColor = prompt("What is your favorite color as a child?");
let age = Number(prompt("What is your current age?"));
let numChoice = Number(prompt("Choose a number between 1 and 10"));

let fortune = `In ${numChoice} years, you are going to meet your best friend named
${motherFirstName} ${street}.
You will get married in ${age+numChoice} years and have ${age%numChoice} kids.
In ${Math.round(age/numChoice)} years you are going to dye your hair blue.`;
console.log(fortune);
// console.log(motherFirstName+street+favoriteColor+age+numChoice);