let Product = require('./Product');

class Cart {
    constructor(products){
        this.products = [];
        this.total = 0;
    }
    addProduct(product){
        this.products.push(product);
        this.total += product.price;
    }
    removeProduct(product){
        //console.log(this.products[product].price);
        this.total -= this.products[product].price;
        let i = this.products.indexOf(product);
        this.products.splice(i,1);
        

        

    }
}
module.exports = Cart;