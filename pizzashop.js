const PizzaShop = require('./pizzeriaClass');
const DrinkMachine = require('./drink-machine');

const pizzaMan = new PizzaShop(); // instantiate a pizza Class
const drinkMachine = new DrinkMachine(); // instantiate a drink Class

// check if the pizzashop class is connected
// console.log("Order number initially :" + pizzaMan.OrderNumber)
pizzaMan.displayOrderNumber();

// build a listener
pizzaMan.on('order', (size, topping)=>{
    console.log(`Baking a ${size} pizza with ${topping}!`)
    drinkMachine.serveDrinks(size);
})

// CHANGES MADE INSIDE THE MAIN BRANCH

// when you order pizzaMan.order() passing 2 params with it you call this.order(size, topping) in the class
// and inside that method you are emitting an event called "order"
// which triggers line 10 (pizzaMan.on) here
pizzaMan.order("Large", "Basterma");
pizzaMan.displayOrderNumber();
// Just a test 