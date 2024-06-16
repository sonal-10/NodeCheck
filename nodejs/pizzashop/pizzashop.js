const EventEmitter = require('node:events');

class PizzaShop extends EventEmitter {
    constructor() {
        super();
        this.orderNumber = 0;
    }

    order(size, topping,username) {
        this.orderNumber++;
        this.emit("order", size, topping,username);
    }

    displayOrderNumber() {
        return `${this.orderNumber}`;
    }
}

module.exports = PizzaShop;