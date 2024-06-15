const PizzaShop = require('./pizzashop.js');
const { User, getUser } = require('./user.js');

const user = new User();
const pizzashop = new PizzaShop();

async function orderPizza() {
    try {
        const users = await getUser();
        
        console.log(users[0]);

        pizzashop.order("large", "Sausages", users.username);
        
        pizzashop.on("order", (size, topping) => {
            if (!size)
                throw new Error("Oops!!. You forgot to click the size of your pizza.");
            if (topping?.trim()?.length != 0 && topping != null) {
                console.log(`Order received!. ${user.username} Order Number ${pizzashop.displayOrderNumber()} Baking a ${size} pizza with ${topping}`);
            }
            else {
                console.log(`Order received!. ${user.username} Order Number ${pizzashop.displayOrderNumber()} Baking a ${size} pizza.`);
            }
        });
    }
    catch (error) {
        console.log(error);
    }
}

orderPizza();
