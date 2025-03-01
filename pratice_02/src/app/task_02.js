const sales = [
    {id: 1, product: "Laptop", ammount: 1500, catagory: "Electronics"},
    {id: 2, product: "Phone", ammount: 800, catagory:"Electronics"},
    {id: 3, product: "Mouse", ammount: 50, catagory:"Accessories"},
    {id: 4, product: "Monoitor", ammount: 300, catagory:"Electronics"},
    {id: 5, product: "Keyboard", ammount: 100, catagory:"Accessories"},
    {id: 6, product: "USB Cable", ammount: 20, catagory:"Accessories"}
]

// task1: Filter out transactions were the amount is less than $100.
const filteredSales = sales.filter(sale => sale.ammount >= 100);
console.log(filteredSales);

// task2: Map each transaction to extract only relevant data (product name and amount).
const mappedSales = filteredSales.map(sale => ({
    product: sale.product,
    ammount: sale.ammount
}));
console.log(mappedSales);

// task3: Reduce to calculater the total sales amount of the remaining transactions.
const totalSalesAmount = mappedSales.reduce((acc, sale) => acc + sale.ammount, 0);

// Answer :
console.log("Total Sales Amount: $" + totalSalesAmount); // Display the total sales amount