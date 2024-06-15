const EventEmitter = require('node:events');


class PizzaShop extends EventEmitter {
    constructor() {
        super();
        this.orderNumber = 0;
    }

    order(size, topping, name) {
        this.orderNumber++;
        this.emit("order", size, topping, name);
    }

    displayOrderNumber() {
        return `${this.orderNumber}`;
    }
}

module.exports = PizzaShop;