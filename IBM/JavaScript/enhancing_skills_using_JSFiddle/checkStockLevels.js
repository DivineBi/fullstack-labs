const products = [{product: "bag", stock: 20},{product: "purse", stock: 22},{product: "ruler", stock: 0}];

// Check the stock is greater than 0, log "in stock" or "out of stock".
function checkStockLevels(products){
    for(let i=0; i<products.length; i++) {
        if(products[i].stock > 0) {
            console.log (`${products[i].product} is in stock`);
        } else {
            console.log (`${products[i].product} is out of stock`);
        }
    }
    
}

checkStockLevels(products);