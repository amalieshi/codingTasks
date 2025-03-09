function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) { 
        sum += arr[i];  
    }
    return sum
}

function subtractNumbers(a, b) {
    return a - b;
}

function multiplyNumbers(a, b) {
    return a * b;
}

function divideNumbers(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}

console.log(findSum([1, 2, 3, 4, 5]));
console.log(subtractNumbers(5, 3));
console.log(multiplyNumbers(5, 3));
console.log(divideNumbers(5, 3));