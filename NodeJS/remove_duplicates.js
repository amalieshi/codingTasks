import lodash from 'lodash'; 

const numbers = [1, 2, 10, 100, 10, 2, 5, 6, 10, 1000, 7, 2, 100, 1, 5, 7, 10];
console.log(`The original array is ${numbers}`);
const uniqueElement = lodash.uniq(numbers);
console.log(`The unique elements are ${uniqueElement}`);