// Import Classes Here
let Product = require('./classes/Product');
let Cart = require('./classes/Cart');
let Customer = require('./classes/Customer');
let Auth = require('./classes/Auth')

// const melanie = new Customer("Melanie", "melanie@gmail.com", "22 Main St");
// const strawberries = new Product("Strawberries", 5, "The freshest fresas on the market");
// const carrots = new Product("Carrots", 2, "Perfect for an afternoon snack");
// const mangos = new Product("Mangos", 3, "The tastiest fruit you can buy");

// const myFirstOrder = new Cart();
// myFirstOrder.addProduct(mangos);
// myFirstOrder.addProduct(carrots);

// const mySecondOrder = new Cart();
// mySecondOrder.addProduct(strawberries);

// melanie.addToOrderHistory(myFirstOrder);
// melanie.addToOrderHistory(mySecondOrder);

// melanie.orderHistory; 
/*
[ 
    Cart { products: [ [Product], [Product] ], total: 5 },
    Cart { products: [ [Product] ], total: 5 },
]
*/
let auth = new Auth();
auth.register("Kaiya", "Kaiya@example.com", '121 Main St');
auth.register("Nina", "Nina@example.com", '22 Broadway St');

console.log(auth.login("Kaiya@example.com"));
/*
{ name: 'Kaiya', email: 'jKaiya@example.com', shippingAddress: '121 Main St' }
}
*/

console.log(auth.login("benny@example.com")); // null




// DO NOT EDIT BELOW THIS LINE
try {
    module.exports = {
        Product,
    }
} catch(e){

}

try {
    module.exports = {
        Product,
        Cart
    }
} catch(e){

}

try {
    module.exports = {
        Product,
        Cart,
        Customer
    }
} catch(e){

}

try {
    module.exports = {
        Product,
        Cart,
        Customer,
        Auth
    }
} catch(e){

}