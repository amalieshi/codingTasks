const groceryItems = ["Milk", "Bread", "Eggs", "Cheese"];

// Function to display items in the grocery list
function displayItems() {
    const ul = document.getElementById("grocery-list");
    groceryItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
}

// Function to set default checked items
function setDefaultChecked() {
    const ul = document.getElementById("grocery-list");
    const items = ul.getElementsByTagName("li");
    if (items.length > 1) {
        items[0].classList.add("bought");
        items[3].classList.add("bought");
    }
}

// Display the items and set default checked items on page load
window.onload = function() {
    displayItems();
    setDefaultChecked();
};