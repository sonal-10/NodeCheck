const PizzaShop = require('./pizzashop.js');

const pizzashop = new PizzaShop();
try {
    pizzashop.on("order", (size, topping) => {
        if (size === "")
            throw new Error("Oops!!. You forgot to click the size of your pizza.");
        if (topping?.trim()?.length != 0 && topping != null) {
            console.log(`Order received!. Your Order Number ${pizzashop.displayOrderNumber()}\n Baking a ${size} pizza with ${topping}`);
        }
        else {
            console.log(`Order received!. Your Order Number ${pizzashop.displayOrderNumber()}\n Baking a ${size} pizza.`);
        }
    });
}
catch(error){
    console.log(error);
}

pizzashop.order("large", "Sausages");
pizzashop.order("small", "");
pizzashop.order("", "corn");