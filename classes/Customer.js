const Cart = require('./Cart');

class Customer {
    constructor(name, email, shippingAddress){
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
        this.orderHistory = [];
    }
    addToOrderHistory(Cart){
        this.orderHistory.push(Cart)
    }
    getRewardPoints(){
        return this.orderHistory.length;
        
    }
}
module.exports = Customer;