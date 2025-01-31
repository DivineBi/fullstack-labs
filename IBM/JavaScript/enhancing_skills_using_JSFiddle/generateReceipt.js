const orders = [
    {item: "pen", quantity: 3, price: 1.5},
    {item: "pencil", quantity: 4, price: 1.0},
    {item: "eraser", quantity: 2, price: 1.1},
];

// Print each item details and total
function generateReceipt(orders){
    let grandTotal = 0;
    console.log("Receipt");
    console.log("---------------------");
    for (let i=0; i < orders.length; i++) {
        const itemTotal = orders[i].quantity * orders[i].price;
        grandTotal += itemTotal;
        console.log(`${orders[i].item} - Quantity: ${orders[i].quantity}, Price: €${orders[i].price}, Total: €${itemTotal}`);
    }
    console.log("---------------------");
    console.log(`Grand Total: €${grandTotal}`);
    
}

generateReceipt(orders);