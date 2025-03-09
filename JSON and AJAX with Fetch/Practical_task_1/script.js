//  Income and Expense objects
const incomes = [
    { name: 'Salary', amount: 4000, recurring: true },
    { name: 'Freelance', amount: 1200, recurring: false },
    { name: 'Investments', amount: 500, recurring: true },
    { name: 'Rental Income', amount: 800, recurring: true },
    { name: 'Gift', amount: 200, recurring: false }
];

const expenses = [
    { name: 'Groceries', amount: 350, recurring: true },
    { name: 'Rent', amount: 1200, recurring: true },
    { name: 'Utilities', amount: 150, recurring: true },
    { name: 'Entertainment', amount: 100, recurring: false },
    { name: 'Transport', amount: 80, recurring: true }
];

let totalIncome = incomes.reduce((sum, income) => sum + income.amount, 0);
let totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
let disposableIncome = totalIncome - totalExpenses;


function displayInfo(totalIncome, totalExpenses, disposableIncome) {
    document.getElementById('totalIncome').innerHTML = `Total Income: $${String(totalIncome)}`
    document.getElementById('totalExpenses').innerHTML = `Total Expenses: $${String(totalExpenses)}`
    document.getElementById('disposableIncome').innerHTML = `Disposable Income: $${disposableIncome}`;
}

document.addEventListener('DOMContentLoaded', (event) => {
    displayInfo(totalIncome, totalExpenses, disposableIncome);
});
// Function to display and add income
function manageIncome() {
    let incomeList = incomes.map(income => `${income.name}: $${income.amount} (Recurring: ${income.recurring})`).join('\n');
    console.log(incomeList)
    let newIncome = prompt(`Current Incomes:\n${incomeList}\n\nAdd new income (format: Name,Amount,Recurring):`);
    if (newIncome) {
        let [name, amount, recurring] = newIncome.split(',');
        incomes.push({ name, amount: Number(amount), recurring: recurring === 'true' });
        sessionStorage.setItem('incomes', JSON.stringify(incomes));
    }
}

// Function to display and add expense
function manageExpenses() {
    let expenseList = expenses.map(expense => `${expense.name}: $${expense.amount} (Recurring: ${expense.recurring})`).join('\n');
    let newExpense = prompt(`Current Expenses:\n${expenseList}\n\nAdd new expense (format: Name,Amount,Recurring):`);
    if (newExpense) {
        let [name, amount, recurring] = newExpense.split(',');
        expenses.push({ name, amount: Number(amount), recurring: recurring === 'true' });
        sessionStorage.setItem('expenses', JSON.stringify(expenses));
    }
}

function calculateDisposableIncome(totalIncome, totalExpenses) {
        totalIncome = incomes.reduce((sum, income) => sum + income.amount, 0);
        totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
        let disposableIncome = totalIncome - totalExpenses;
        let savings = prompt(`Your total disposable income is $${disposableIncome}. How much would you like to put into savings?`);
        if (savings) {
            savings = Number(savings);
            disposableIncome -= savings;
            alert(`You have $${disposableIncome} left after savings.`);
        }
    }


// Store initial data in session storage
sessionStorage.setItem('incomes', JSON.stringify(incomes));
sessionStorage.setItem('expenses', JSON.stringify(expenses));