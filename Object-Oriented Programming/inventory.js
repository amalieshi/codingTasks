function Shoes(name, product_code, quantity, value_per_item) {
    this.name = name;
    this.product_code = product_code;
    this.quantity = quantity;
    this.value_per_item = value_per_item;

    this.search_shoes = function (product_code) {
        if (this.product_code === product_code) {
            return this;
        }
    }
}

// Function to find the shoe with the lowest value per item
function findLowestValueShoe(shoes) {
    return shoes.reduce((lowest, shoe) => shoe.value_per_item < lowest.value_per_item ? shoe : lowest, shoes[0]);
}

// Function to find the shoe with the highest value per item
function findHighestValueShoe(shoes) {
    return shoes.reduce((highest, shoe) => shoe.value_per_item > highest.value_per_item ? shoe : highest, shoes[0]);
}

// Function to edit all four properties for each of the five shoe instances
function editShoeProperties(shoes, index, name, product_code, quantity, value_per_item) {
    if (index >= 0 && index < shoes.length) {
        shoes[index].name = name;
        shoes[index].product_code = product_code;
        shoes[index].quantity = quantity;
        shoes[index].value_per_item = value_per_item;
    }
}

// Function to order all the objects in ascending order based on the “Value per item” property
function orderShoesByValue(shoes) {
    return shoes.sort((a, b) => a.value_per_item - b.value_per_item);
}

// Function to search for a shoe by product code in the array
function searchShoeByProductCode(shoes, product_code) {
    return shoes.find(shoe => shoe.product_code === product_code);
}

// Example usage
let shoes = [
    new Shoes("Nike", "001", 10, 50),
    new Shoes("Adidas", "002", 5, 70),
    new Shoes("Puma", "003", 8, 40),
    new Shoes("Reebok", "004", 12, 60),
    new Shoes("Asics", "005", 7, 55)
];

console.table(shoes);
console.log(`Lowest value shoe is ${findLowestValueShoe(shoes).name}.`);
console.log(findHighestValueShoe(shoes));
editShoeProperties(shoes, 0, "Nike Updated", "001U", 15, 45);
console.log(orderShoesByValue(shoes));
console.log(searchShoeByProductCode(shoes, "003"));
console.table(shoes);