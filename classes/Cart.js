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
    removeProduct(i){
        //console.log(this.products[product].price);
        this.total -= this.products[i].price;
        //let i = this.products.indexOf(i);
        this.products.splice(i,1);
    }
    getTotal(){
        // let sum = 0;
        // this.products.forEach(element => { sum += element.price});
        return this.total;
    }
    clear(){
        this.products = [];
        this.total = 0;
    }
    removeItemByName(name){
        for(let product of this.products){
            if(product.name === name){
                this.total -= product.price;
                this.products = this.products.filter(function (p){
                    return p !== product;
                });
            }
        }
    }
}
module.exports = Cart;