const EventEmitter = require('events');

class PizzaShop extends EventEmitter{
    constructor() { 
        super();
        this.OrderNumber = 0;
    }
    order(size, topping) {
        this.OrderNumber++;
        this.emit("order", size, topping);
    }
    displayOrderNumber() {
        console.log(`Order number is ${this.OrderNumber}`)
    }
}

module.exports = PizzaShop;