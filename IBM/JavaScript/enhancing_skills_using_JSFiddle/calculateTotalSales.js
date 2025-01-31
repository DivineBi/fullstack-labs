// Objects representing a sales transaction
const sales = [
    {item: "Laptop", quantity: 2, price: 800},
    {item: "Monitor", quantity: 1, price: 150},
    {item: "Mouse", quantity: 4, price: 25}
];
// Accumulate totals to get the overall sales amount
function calculateTotalSales(sales) {
    let total = 0;
    for (let i=0; i < sales.length; i++) {
        total += sales[i].quantity * sales[i].price;
    }
    return total;
}

console.log("Total Sales Amount", calculateTotalSales(sales));