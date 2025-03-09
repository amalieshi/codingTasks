let amountOfWater = prompt("Enter the amount of water used in litres: ");

if (amountOfWater <= 6000) {
    total = 0.01573 * amountOfWater;
} else if (amountOfWater <= 10500 && amountOfWater > 6000) {
    total = 6000 * 0.01573 + 0.02238 * (amountOfWater - 6000);
} else if (amountOfWater <= 35000 && amountOfWater > 10500) {
    rate =  6000 * 0.01573 + 0.02238 * (10500-6000) + 0.03177 * (amountOfWater - 10500);
}  else if (amountOfWater > 35000) {
    rate = 6000 * 0.01573 +  0.02238 * (10500-6000) + 0.03177 * (35000-10500) + 0.06976 * (amountOfWater - 35000);
}   

console.log("The total amount of water used is: " + amountOfWater + " litres");
console.log("The total amount to be paid is: " + total + " Rands");
