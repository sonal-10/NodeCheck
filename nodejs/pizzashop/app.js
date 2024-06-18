const PizzaShop = require('./pizzashop.js');
const getUser = require('./user.js');

const pizzaSizes = ["small", "medium", "large", "extra-large"];
const toppings = ["Sausages", "Corn", "Olives", "Cheese"];

const user = new User();
const pizzashop = new PizzaShop();

async function makePizza() {
    try {
        // Get User Requests
        const userNames = await getUser();

        // Place orders for each user
        userNames.forEach(user => {

            let pizzaSize = pizzaSizes[Math.floor(Math.random() * pizzaSizes.length)];
            let topping = toppings[Math.floor(Math.random() * toppings.length)];
            let customername = user;

            // Order the pizza
            pizzashop.order(pizzaSize, topping, customername);
            console.log("\n-----------------------------------------\n");


            // Event listener for the "order" event, fires only once 
            pizzashop.once("order", (pizzaSize, topping, customername) => {
                try {
                    if (pizzaSize === "")
                        throw new Error("Oops!!. You forgot to click the size of your pizza.");

                    if (topping.trim().length !== 0 && topping !== null)
                        console.log(`Hello ${customername} your Order has been received!.\n
                             Your Order Number ${pizzashop.displayOrderNumber()}.\n
                             Baking a ${pizzaSize} pizza with ${topping}`);
                    else
                        console.log(`Hello ${customername} your Order has been received!.\n
                             Your Order Number ${pizzashop.displayOrderNumber()}.\n
                             Baking a ${pizzaSize} pizza.`);

                } catch (error) {
                    console.log(error);
                }
            });

        });

    } 
    catch (error) {
        console.error(error);
    }
}

makePizza();
