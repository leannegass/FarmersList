let Customer = require('./Customer');

class Auth {
    constructor(customers){
        this.customers = [];
    }
    register(name,email,shippingAddress){
        let customer = new Customer(name,email,shippingAddress);
        this.customers.push(customer);

    }
    login(email){
        for (let customer of this.customers){
            //console.log(customer.email);
            if (customer.email === email){
                return customer;
            }
        }
        return null;

    }
}
module.exports = Auth;